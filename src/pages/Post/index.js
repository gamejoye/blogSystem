import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";
import './index.css'
import Comments from "../Comments";
import Markdown from "../../components/Markdown";


function Post(props) {
    const localtion = useLocation();
    const { title } = localtion.state;
    const [blog, setBlog] = useState({});
    useEffect(() => {
        getInstance.get('blogs/' + 'title', {
            params: {
                titles: title
            }
        }).then(
            (res) => { setBlog(res.data); }
        )
    }, [1]);
    if(!blog.content) return <div>loading...</div>
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog.title} className="header"/>
                <Markdown content={blog.content} className="content"/>
            </div>
            <Comments title={title} />
        </div>
    )
}

export default Post;