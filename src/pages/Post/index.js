import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";
import './index.css'
import Comments from "../Comments";

import { baseUrl } from "../../constant";

function Post(props) {
    const localtion = useLocation();
    const { title } = localtion.state;
    const [blog, setBlog] = useState({});
    useEffect(() => {
        getInstance.get(baseUrl + 'blogs/' + 'title', {
            params: {
                titles: title
            }
        }).then(
            (res) => { setBlog(res.data); }
        )
    }, [1]);
    return (
        <div className="post">
            <div className="header">
                <h1 className="h1">{blog.title}</h1>
            </div>
            <div className="content">
                <p className="p">{blog.content}</p>
            </div>
            <Comments title={title}/>
        </div>
    )
}

export default Post;