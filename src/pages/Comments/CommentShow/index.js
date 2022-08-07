import React from "react";
import { Comment, Avatar } from "antd";
import './index.css'
function CommentShow(props) {
    const comment = props.comment;
    return (
        <Comment
            author={comment.name}
            content={comment.content}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        />
    )
}

export default CommentShow