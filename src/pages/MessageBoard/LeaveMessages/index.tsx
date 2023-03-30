import { EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, List, Row, Space } from "antd";
import React, { useState } from "react";
import SubLeaveMessages from "./SubLeaveMessages";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";
import { selectAllLeaveMessages } from "../../../redux/selectors/leaveMessagesSelector";
import { IFriendLink, ILeaveMessage } from "../../../types";
import './index.scss'

interface IProps {
    replyInput: any;
    replyMessageId: number | undefined;
    replayFriendLink: IFriendLink | undefined;
    canPostReplyMessage: boolean;
    setReplyMessage: (s: string) => void;
    setReplyMessageId: (id: number | undefined) => void;
    setReplyFriendLink: (friendLink: IFriendLink | undefined) => void;
    handleReplyMessageSubmit: (id: number) => void;
}

function LeaveMessages({
    replyInput,
    replyMessageId,
    replayFriendLink,
    canPostReplyMessage,
    setReplyMessage,
    setReplyMessageId,
    setReplyFriendLink,
    handleReplyMessageSubmit
}: IProps) {
    const leaveMessages = useSelector(selectAllLeaveMessages);
    const handleReplyMessageOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReplyMessage(e.currentTarget.value);
    }
    const handleReply = (message: ILeaveMessage) => {
        setReplyMessage('');
        setReplyMessageId(message.id);
        setReplyFriendLink(undefined);
    }
    return (
        <List
            itemLayout="vertical"
            split={false}
            pagination={{ pageSize: 10 }}
            dataSource={leaveMessages}
            renderItem={leaveMessage => (
                <>
                    <List.Item
                        actions={[<Space
                            className="leave-message-list-item-actions"
                            onClick={() => handleReply(leaveMessage)}>
                            <EditOutlined />
                            回复
                        </Space>]}
                    >
                        <List.Item.Meta
                            title={<Space>
                                {leaveMessage.friendLink.name}
                            </Space>}
                            avatar={<Avatar src={leaveMessage.friendLink.avatarUrl} />}
                        />
                        <div style={{ paddingLeft: 32 }}>
                            {leaveMessage.content}
                        </div>
                    </List.Item>
                    {leaveMessage.subLeaveMessage !== undefined && leaveMessage.subLeaveMessage.length > 0
                        ? (<SubLeaveMessages
                            leaveMessage={leaveMessage}
                            handleReply={handleReply}
                        />)
                        : null}
                    {replyMessageId === leaveMessage.id
                        ? <Row align="middle">
                            <TextArea
                                style={{ width: '40%', display: 'block', marginRight: '8px' }}
                                ref={replyInput}
                                placeholder={"回复@" + (replayFriendLink?.name ?? "")}
                                onChange={handleReplyMessageOnChange}
                            />
                            <Button
                                type="primary"
                                disabled={!canPostReplyMessage}
                                onClick={() => handleReplyMessageSubmit(leaveMessage.id)}>
                                评论
                            </Button>
                        </Row>
                        : null}
                </>
            )}
        />
    )
}

export default LeaveMessages;