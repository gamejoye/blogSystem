import React from "react";
import './index.css'
function CommentShow(props) {
    const comment = props.comment;
    return (
        <div>
            <div className="comment-header">
                <h3>{comment.name}</h3>
            </div>
            <div className="commment-content">
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default CommentShow