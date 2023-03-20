import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilterSearchTerm } from "../../redux/selectors/blogSelector";
import { useNavigate } from "react-router";
import { IBlog } from "../../types";
import { IRootState } from "../../redux/store";
import { Input, List, Tag } from "antd";
import './index.scss'
import { RedoOutlined } from "@ant-design/icons";

function Titles() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const blogs = useSelector((state: IRootState) => selectFilterSearchTerm(state, searchTerm));
    const handleTitleOnClick = (blog: IBlog) => {
        navigate(`/post/${blog.id}`);
    }
    return (
        <div className="titles-container">
            <Input
                placeholder="查询文章标题..."
                onChange={e => setSearchTerm(e.currentTarget.value)}
                allowClear={{ clearIcon: <RedoOutlined /> }}
            />
            <List
                pagination={{
                    pageSize: 10
                }}
                dataSource={blogs}
                renderItem={blog => {
                    return (
                        <List.Item 
                        className="title-item"
                        onClick={() => handleTitleOnClick(blog)}
                        >
                            {blog.title}
                            <span style={{ float: 'right' }}>
                                {blog.tags.map(tag => {
                                    return (
                                        <Tag>{tag}</Tag>
                                    )
                                })}
                            </span>
                        </List.Item>
                    )
                }}
            />
        </div>
    )
}

export default Titles;