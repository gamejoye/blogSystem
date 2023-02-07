import React from "react";
import Markdown from "../../../../components/Markdown";
import './index.scss'
import { Divider } from "antd";
import { IBlog } from "../../../../types";

interface IProps {
    blog: IBlog;
    handleOnClick: (blog: IBlog) => void;
}

function PostCard({ blog, handleOnClick }: IProps) {
    return (
        <div>
            <div className="postcard">
                <h1 className="post-h1">
                    <Markdown content={blog.title} className="header" isPreview={false} />
                </h1>
                <Divider />
                <p onClick={() => handleOnClick(blog)} className="post-p">{blog.content}</p>
            </div>
        </div>
    )
}
export default PostCard;