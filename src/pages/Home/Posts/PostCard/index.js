import React from "react";
import Markdown from "../../../../components/Markdown";
import 'antd/dist/antd.css';
import './index.css'
import { Divider } from "antd";
import { useNavigate } from "react-router";

function PostCard({blog, handleOnclick, handleDelete}) {
    return (
        <div>
            <div className="postcard">
                <a onClick={(e) => handleDelete(e)}>删除</a>
                <h1 className="post-h1"><Markdown content={blog.title} _className="header" /></h1>
                <Divider/>
                <p onClick={handleOnclick} className="post-p">{blog.content}</p>
            </div>
        </div>
    )
}
export default PostCard;