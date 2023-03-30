import { Avatar, Button, Col, Form, Image, Input, InputRef, List, Row, Space, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import './index.scss';
import { useSelector } from "react-redux";
import { selectLeaveMessagesStatus } from "../../redux/selectors/leaveMessagesSelector";
import { useAppDispatch } from "../../redux/store";
import { addLeaveMessage, loadLeaveMessages } from "../../redux/reducers/leaveMessagesReducer";
import { IFriendLink } from "../../types";
import moment from "moment";
import { MESSAGE_DATETIME_FORMAT } from "../../constant";
import { getFriendLinkByEmail } from "../../utils/apis/axios/api";
import DataPicker from "./DataPicker";
import LeaveMessages from "./LeaveMessages";

function MessageBoard() {
    const dispatch = useAppDispatch();
    const status = useSelector(selectLeaveMessagesStatus);
    const [name, setName] = useState(''); // 名字
    const [email, setEmail] = useState(''); // 邮箱
    const [avatarUrl, setAvatarUrl] = useState(''); // 头像链接

    const [leaveMessage, setLeaveMessage] = useState(''); // 留言消息
    const [isPreview, setIsPreview] = useState(false); // 开启预览
    const replyInput = useRef<InputRef>(null); 
    const [replyMessage, setReplyMessage] = useState(''); // 回复消息
    const [replyMessageId, setReplyMessageId] = useState<number | undefined>(undefined); // 回复消息的id， 用来判断是否弹出输入框
    const [replayFriendLink, setReplyFriendLink] = useState<IFriendLink | undefined>(undefined); // 回复的人的友情链接， 用于Input placeholder

    const [postLeaveMessageStatus, setPostLeaveMessageStatus] = useState('idle');
    const [postReplyMessageStatus, setPostReplyMessageStatus] = useState('idle');

    const canPostLeaveMessage = [name, email, leaveMessage].every(Boolean) && postLeaveMessageStatus === 'idle';
    const canPostReplyMessage = [name, email, replyMessage].every(Boolean) && postReplyMessageStatus === 'idle';

    useEffect(() => {
        if (replyMessageId) replyInput.current?.focus();
    }, [replyMessageId]);

    if (status == 'idle') {
        dispatch(loadLeaveMessages());
    }

    const preCheckMessageCheck: () => boolean = () => {
        if (name === '') {
            message.error('用户名不能为空');
            return false;
        }
        if (email === '') {
            message.error('邮箱不能为空');
            return false;
        }
        return true;
    }

    const handleGetFriendLink = async () => {
        if (email === '') {
            message.error('邮箱不能为空');
            return;
        }
        const friendLink: IFriendLink = (await getFriendLinkByEmail(email)).data;

        if (friendLink !== null) {
            const { name, avatarUrl = ''} = friendLink;
            setName(name);
            setAvatarUrl(avatarUrl);
            message.success('获取信息成功!')
        } else {
            message.warning('不存在该邮箱')
        }
    }

    const clearAfterSuccess = (setMessage: (messge: string) => void) => {
        setMessage('');
        setReplyMessageId(undefined);
    }
    const handleReplyMessageSubmit = async (belongTo: number) => {
        if (!preCheckMessageCheck()) return;
        if (canPostReplyMessage) {
            try {
                setPostReplyMessageStatus('pending');
                await dispatch(addLeaveMessage({
                    id: null as any, // 这里的id是leaveMessage的主键自增id 不需要传给后端 用null占位就可以了
                    time: moment().format(MESSAGE_DATETIME_FORMAT),
                    content: replyMessage,
                    belongTo,
                    reply: replayFriendLink?.email,
                    friendLink: {
                        name,
                        email
                    }
                })).unwrap();
                clearAfterSuccess(setReplyMessage)
                message.success('留言回复成功')
            } catch (e) {
                message.error(e.message)
            } finally {
                setPostReplyMessageStatus('idle');
            }
        }
    }
    const handleLeaveMessageSubmit = async () => {
        if (!preCheckMessageCheck()) return;
        if (canPostLeaveMessage) {
            try {
                setPostLeaveMessageStatus('pending');
                await dispatch(addLeaveMessage({
                    id: null as any,
                    time: moment().format(MESSAGE_DATETIME_FORMAT),
                    content: leaveMessage,
                    friendLink: {
                        name,
                        email
                    }
                })).unwrap();
                clearAfterSuccess(setLeaveMessage);
                message.success('留言成功')
            } catch (e) {
                message.error(e.message);
            } finally {
                setPostLeaveMessageStatus('idle');
            }
        }
    }
    return (
        <div className="messages-container">
            <DataPicker
                avatarUrl={avatarUrl}
                name={name}
                isPreview={isPreview}
                leaveMessage={leaveMessage}
                canPostLeaveMessage={canPostLeaveMessage}
                setEmail={setEmail}
                setIsPreview={setIsPreview}
                setLeaveMessage={setLeaveMessage}
                setName={setName}
                handleGetFriendLink={handleGetFriendLink}
                handleLeaveMessageSubmit={handleLeaveMessageSubmit}
            />
            {isPreview ?
                <div className="leave-message-preview">
                    {leaveMessage}
                </div>
                : null}
            <LeaveMessages
                replyInput={replyInput}
                replyMessageId={replyMessageId}
                replayFriendLink={replayFriendLink}
                canPostReplyMessage={canPostReplyMessage}
                setReplyFriendLink={setReplyFriendLink}
                setReplyMessage={setReplyMessage}
                setReplyMessageId={setReplyMessageId}
                handleReplyMessageSubmit={handleReplyMessageSubmit}
            />
        </div>
    )
}
export default MessageBoard;