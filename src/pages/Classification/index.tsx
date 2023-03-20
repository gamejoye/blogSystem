import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectAllBlogs, selectAllTags } from "../../redux/selectors/blogSelector";
import './index.scss'
import { List, Statistic, Tag } from "antd";
function Classification() {
    const blogs = useSelector(selectAllBlogs);
    const items = useSelector(selectAllTags).map(
        tag => {
            return {
                tag,
                blogCount: blogs.filter(blog => blog.tags.includes(tag)).length
            }
        }
    );
    const navigate = useNavigate();
    const handleTagOnClick = (tag: string) => {
        navigate(`/blogDetail/${tag}`);
    }
    return (
        <div className="classification-container">
            <List
                size="large"
                grid={{ column: 2 }}
                dataSource={items}
                renderItem={(item) => {
                    return (
                        <List.Item
                            className="tag-item"
                            style={{ padding: 8 }}
                            onClick={() => handleTagOnClick(item.tag)}
                        >
                            {item.tag}
                            <Tag className="tag-count">
                                {item.blogCount}
                            </Tag>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}
export default Classification;