import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAllBlogs, selectFilterTagsBlogs } from "../../../redux/selectors/blogSelector";
import { IBlog } from "../../../types";
import { Avatar, Divider, List } from "antd";
import { selectUserInfo } from "../../../redux/selectors/userInfoSelector";
import './index.scss'
function Posts() {
    const userInfo = useSelector(selectUserInfo);
    const navigate = useNavigate();
    const blogs = useSelector(selectFilterTagsBlogs).map(
        blog => {
            return {
                blogId: blog.id,
                title: blog.title,
                avatar: userInfo.avatarUrl,
                description: userInfo.aboutMe,
                content: blog.content
            }
        }
    );
    const handleOnClick = (blogId: number) => {
        navigate(`post/${blogId}`);
    }
    return (
        <List
            itemLayout="vertical"
            split={false}
            size="large"
            pagination={{
                pageSize: 10,
            }}
            dataSource={blogs}
            renderItem={(item) => (
                <List.Item onClick={() => handleOnClick(item.blogId)} style={{
                    marginTop: '32px',
                    background: '#ffff',
                    cursor: 'pointer',
                    border: '1px',
                    boxShadow: '0px 0px 2px 5px #f5f5f5',
                }}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={item.title}
                        description={item.description}
                    />
                    <div className="list-item">
                        {item.content}
                    </div>
                </List.Item>)
            }
        />
    )
}
export default Posts;