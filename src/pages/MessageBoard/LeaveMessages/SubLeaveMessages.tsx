import React, { useState } from "react";
import { IFriendLink, ILeaveMessage } from "../../../types";
import { Avatar, Divider, List, Space } from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import './index.scss'
interface IProps {
    leaveMessage: ILeaveMessage;
    handleReply: (message: ILeaveMessage) => void;
}
function SubLeaveMessages({
    leaveMessage,
    handleReply
}: IProps) {
    const [isViewMore, setIsViewMore] = useState(false);
    const viewMore = () => {
        setIsViewMore(true);
    }
    const viewMoreItem = isViewMore
        ? null
        : (<Divider orientation="left" plain>
            <span onClick={viewMore} className="load-more">查看更多<DownOutlined /></span>
        </Divider>);
    return (
        <>
            {isViewMore
                ? (<List
                    split={false}
                    style={{ marginLeft: 48 }}
                    dataSource={leaveMessage.subLeaveMessage}
                    renderItem={subLeaveMessage => (
                        <List.Item
                            actions={[<Space
                                className="leave-message-list-item-actions"
                                onClick={() => handleReply(subLeaveMessage)}>
                                <EditOutlined />
                                回复
                            </Space>]}
                        >
                            <List.Item.Meta
                                title={<Space>
                                    {subLeaveMessage.friendLink.name}
                                </Space>}
                                avatar={<Avatar src={subLeaveMessage.friendLink.avatarUrl} />}
                            />
                            {subLeaveMessage.content}
                        </List.Item>
                    )}
                />)
                : viewMoreItem}
        </>
    )
}
export default SubLeaveMessages;