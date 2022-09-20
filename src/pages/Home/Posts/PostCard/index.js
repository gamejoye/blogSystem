import React, { useState } from "react";
import Markdown from "../../../../components/Markdown";
import 'antd/dist/antd.css';
import './index.css'
import { Divider } from "antd";
import { useNavigate } from "react-router";

function PostCard(props) {
    const blog = props.blog;
    const navigate = useNavigate();
    function handleDelete() {
        props.setId(blog.id);
        document.getElementById("root").style.filter = 'brightness(0.5)';
        document.getElementById("prompt").style.display = 'block';
    }
    function handleOnclick() {
        navigate('/post?title=' + blog.title, { state: { title: blog.title } })
    }
    return (
        <div>
            <div className="postcard">
                <a onClick={() => handleDelete()}>删除</a>
                <h1 className="post-h1"><Markdown content={blog.title} _className="header" /></h1>
                <Divider/>
                <p onClick={() => handleOnclick()} className="post-p">{blog.content}</p>
            </div>
        </div>
    )
}
export default PostCard;