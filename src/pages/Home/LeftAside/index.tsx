import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../redux/selectors/userInfoSelector";
import { Affix, Avatar, Card, Col, Row, Space, Statistic } from "antd";
import { selectAllBlogs, selectAllTags } from "../../../redux/selectors/blogSelector";
import { ContainerFilled, EllipsisOutlined, MessageFilled, SettingOutlined, TagsFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { BASE_ADMIN_URL } from "../../../constant";
const { Meta } = Card;
function LeftAside() {
    const userInfo = useSelector(selectUserInfo);
    const blogCount = useSelector(selectAllBlogs).length;
    const tagCount = useSelector(selectAllTags).length;
    const navigation = useNavigate();
    const handleNavigate = (path: string) => {
        navigation(path)
    }
    return (
        <Affix offsetTop={32}>
            <Card
                cover={<img src={userInfo.avatarUrl} />}
                actions={[
                    <a href={BASE_ADMIN_URL} key={"setting"}>
                        <SettingOutlined
                            key={"setting"}
                        />
                    </a>,
                    <EllipsisOutlined
                        key={"ellipsis"}
                        onClick={() => handleNavigate('about')}
                    />
                ]}
            >
                <Meta
                    avatar={<Avatar src={userInfo.avatarUrl} />}
                    title={userInfo.name}
                    description={userInfo.aboutMe}
                />
                <br />
                <Row>
                    <Col span={8}>
                        <Statistic title={<Space><ContainerFilled />文章</Space>} value={blogCount} />
                    </Col>
                    <Col span={8}>
                        <Statistic title={<Space><TagsFilled />标签</Space>} value={tagCount} />
                    </Col>
                    <Col span={8}>
                        <Statistic title={<Space><MessageFilled />留言</Space>} value={520} />
                    </Col>
                </Row>
            </Card>
        </Affix>
    )
}
export default LeftAside