import React from "react";
import { Col, Row, Tooltip, QRCode, Statistic } from "antd";
import { GithubOutlined, QqOutlined, WechatFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectAllBlogs, selectAllTags } from "../../redux/selectors/blogSelector";
import './index.scss'
const now = new Date();
const deadline = Date.now() + 24 * 60 * 60 * 1000 - (now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000);
const RightAside = () => {
    const tagCount = useSelector(selectAllTags).length;
    const blogCount = useSelector(selectAllBlogs).length;
    return (
        <div
            className="sub-right-about-container">
            <Row gutter={16}>
                <Col>
                    <Tooltip title={<QRCode value="https://gamejoye.top" size={128} />}>
                        <GithubOutlined style={{ fontSize: 32 }} />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title={<QRCode value="https://gamejoye.top" size={128} />}>
                        <QqOutlined style={{ fontSize: 32 }} />
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title={<QRCode value="https://gamejoye.top" size={128} />}>
                        <WechatFilled style={{ fontSize: 32 }} />
                    </Tooltip>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col>
                    <Statistic title={<span>标签</span>} value={tagCount} />
                </Col>
                <Col>
                    <Statistic title={<span>文章</span>} value={blogCount} />
                </Col>
                <Col>
                    <Statistic title={<span>留言</span>} value={520} />
                </Col>
            </Row>
            <Row>
                <Statistic.Countdown title="每日倒计时" value={deadline} format="HH:mm:ss" />
            </Row>
        </div>
    )
}
export default RightAside;