import React from "react";

function PostCard(props) {
    const blog = props.blog;
    return (
        <div onClick={props.onClick}>
            <h1>{blog.article_name}</h1>
            <p>{blog.content}</p>
        </div>
    )
}

export default PostCard;