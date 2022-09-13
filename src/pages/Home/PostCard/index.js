import React from "react";
import Markdown from "../../../components/Markdown";
import 'antd/dist/antd.css';
import './index.css'

function PostCard(props) {
    const blog = props.blog;
    return (
        <div
            onClick={props.onClick}
            className="postcard"
        >
            <h1 className="post-h1"><Markdown content={blog.title} _className="header"/></h1>
            <p className="post-p"></p>
        </div>
    )
}
export default PostCard;