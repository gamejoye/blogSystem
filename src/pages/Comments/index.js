import React from "react";
import { getInstance, postInstance } from "../../utils/apis/axiosConfig";
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../../constant";
import { getCookie } from "../../utils/apis/getCookie";
import './index.css'

import CommentShow from "./CommentShow";

function Comments(props) {
    const username = getCookie("username");
    const title = props.title;
    const [comments,setComments] = useState([]);
    useEffect(() => {
        getInstance.get(baseUrl+'comments'+'/all', {
            params: {
                username: username,
                title: title
            }
        }).then(
            (res) => {
                setComments(res.data);
            }
        )
    },[1]);
    const commentShows = comments.map((comment,index) => {
        return (
            <CommentShow
                key = {index}
                comment = {comment}
            />
        )
    })
    return (
        <div className="comments">
            {commentShows}
        </div>
    )
}

export default Comments;