import React from "react";
import { Row, Col, Image, Input, Space, Button } from "antd";
import { MailOutlined, QqOutlined, RedoOutlined, UserOutlined } from "@ant-design/icons";
import defaultAvatarUrl from '../../images/hp/hp1.jpeg'
import './index.scss'
const { TextArea } = Input;

interface IProps {
    avatarUrl: string;
    name: string;
    leaveMessage: string;
    isPreview: boolean;
    canPostLeaveMessage: boolean,
    setEmail: (email: string) => void;
    setLeaveMessage: (leaveMessage: string) => void;
    setName: (name: string) => void;
    setIsPreview: (isPreview: boolean) => void;
    handleGetFriendLink: () => void;
    handleLeaveMessageSubmit: () => void;
}

function DataPicker({
    avatarUrl,
    name,
    leaveMessage,
    isPreview,
    canPostLeaveMessage,
    setName,
    setEmail,
    setLeaveMessage,
    setIsPreview,
    handleGetFriendLink,
    handleLeaveMessageSubmit
}: IProps) {

    const handlePreviewOnClick = () => {
        setIsPreview(!isPreview);
    }
    const handleNameInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleEmailInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const handleLeaveMessageOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLeaveMessage(e.currentTarget.value);
    }

    return (
        <Row gutter={16}>
            <Col span={6}>
                <Row className="avatar-wrapper">
                    <Image className="avatar" src={avatarUrl === '' ? defaultAvatarUrl : avatarUrl} />
                </Row>
            </Col>
            <Col span={18}>
                <Row gutter={[16, 8]}>
                    <Col span={18}>
                        <Input
                            value={name}
                            size="large"
                            prefix={<UserOutlined />}
                            placeholder="可以根据邮箱获取上次使用的名称"
                            onChange={handleNameInputOnChange}
                        />
                    </Col>
                    <Col span={18}>
                        <Input
                            size="large"
                            prefix={<MailOutlined />}
                            placeholder="qq邮箱"
                            onChange={handleEmailInputOnChange}
                        />
                    </Col>
                    <Col span={18}>
                        <TextArea
                            rows={6}
                            size="large"
                            showCount
                            value={leaveMessage}
                            maxLength={200}
                            allowClear={{ clearIcon: <RedoOutlined /> }}
                            placeholder={"写点留言给站主吧！\n也可以回复指定的评论哦！"}
                            onChange={handleLeaveMessageOnChange}
                        />
                    </Col>

                    <Col span={18}>
                        <Space>
                            <Button type="dashed" onClick={handleGetFriendLink}>获取信息</Button>
                            <Button onClick={handlePreviewOnClick}>{isPreview ? "关闭" : "开启"}预览</Button>
                            <Button
                                type="primary"
                                disabled={!canPostLeaveMessage}
                                htmlType="submit"
                                onClick={handleLeaveMessageSubmit}
                            >
                                发布留言
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default DataPicker;