import React, { useEffect, useState, lazy } from "react";
import { useLocation } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";
import Markdown from "../../components/Markdown";
import './index.css'
const Comments = lazy(() => import('../Comments'))


function Post() {
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
                <Markdown content={blog.title} _className="header"/>
                <Markdown content={blog.content} _className="content"/>
            </div>
            <Comments title={title} />
        </div>
    )
}
export default Post;