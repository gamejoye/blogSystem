import React from "react";
import Markdown from "../../../../components/Markdown";
import 'antd/dist/antd.css';
import './index.css'
import { postInstance } from "../../../../utils/apis/axiosConfig";
import { BASE_URL } from "../../../../constant";
import { Divider } from "antd";

function PostCard(props) {
    const blog = props.blog;
    function handleDelete() {
        postInstance.post(BASE_URL + "blogs/deletion", {
            id: blog.id
        }).then(
            (res) => {
                if (res.data == "succeed") props.setCount(props.count + 1);
            }
        )
    }
    return (
        <div>
            <div className="postcard">
                <a onClick={() => handleDelete()}>删除</a>
                <h1 className="post-h1"><Markdown content={blog.title} _className="header" /></h1>
                <Divider/>
                <p onClick={props.onClick} className="post-p">{blog.content}</p>
            </div>
        </div>
    )
}
export default PostCard;