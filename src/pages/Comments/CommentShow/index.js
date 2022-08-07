import React from "react";
import { Comment, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import './index.css'
function CommentShow(props) {
    const comment = props.comment;
    console.log(comment)
    return (
        <Comment
            author={comment.name}
            content={comment.content}
            avatar={<Avatar icon={<UserOutlined/>} />}
            datetime={comment.commentDay}
        />
    )
}

export default CommentShow