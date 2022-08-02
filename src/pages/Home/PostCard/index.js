import React from "react";
import 'antd/dist/antd.css';
import './index.css'

function PostCard(props) {
    const blog = props.blog;
    return (
        <div
            onClick={props.onClick}
            className="postcard"
        >
            <h1 className="post-h1">{blog.title}</h1>
            <p className="post-p">{blog.content}</p>
        </div>

    )
}

export default PostCard;