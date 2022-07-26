import React from "react";
import { Divider } from "antd";
import 'antd/dist/antd.css';
import './index.css'

function PostCard(props) {
    const blog = props.blog;
    return (
        <div>
            <li
                onClick={props.onClick}
                className="card"
            >   
                <h1 className="h1">{blog.title}</h1>
                <p className="p">{blog.content}</p>
            </li>
        </div>
    )
}

export default PostCard;