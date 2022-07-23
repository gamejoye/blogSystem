import React from "react";
import { Divider, Card } from "antd";
import 'antd/dist/antd.css';
import './index.css'

function PostCard(props) {
    const blog = props.blog;
    return (
        <div>
            <Card
                title={blog.title}
                extra={<a onClick={props.onClick}>Detail</a>}
                className="card"
            >
                <p>{blog.content}</p>
            </Card>
        </div>
    )
}

export default PostCard;