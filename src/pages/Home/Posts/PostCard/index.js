import React from "react";
import Markdown from "../../../../components/Markdown";
import 'antd/dist/antd.css';
import './index.css'
import { Divider } from "antd";

function PostCard({blog, handleOnclick, handleDelete}) {
    return (
        <div>
            <div className="postcard">
                <a onClick={(e) => handleDelete(e)(blog)}>删除</a>
                <h1 className="post-h1"><Markdown content={blog.title} _className="header" /></h1>
                <Divider/>
                <p onClick={() => handleOnclick(blog)} className="post-p">{blog.content}</p>
            </div>
        </div>
    )
}
export default PostCard;