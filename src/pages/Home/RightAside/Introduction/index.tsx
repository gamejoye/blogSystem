import { Space, Typography } from "antd";
import React from "react";
import './index.scss'
import { MailFilled } from "@ant-design/icons";
import { GMAIL, QQ_EMAIL } from "../../../../constant";
const { Text, Paragraph } = Typography
const Introduction = () => {
    return (
        <Typography className="introduction">
            <Paragraph>
                欢迎来到我的
                <Text strong>
                    个人博客
                </Text>
            </Paragraph>
            <Paragraph>
                如果你希望与我取得联系
            </Paragraph>
            <Paragraph>
                下面是我的一些
                <Text strong>
                    个人
                </Text>
                信息
            </Paragraph>
            <Paragraph>
                <blockquote>
                    <Space>
                        <MailFilled />
                        {GMAIL}
                    </Space>
                    <Space>
                        <MailFilled />
                        {QQ_EMAIL}
                    </Space>
                </blockquote>
            </Paragraph>
        </Typography>
    )
}
export default Introduction