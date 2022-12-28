import React, { lazy, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Markdown from "../../components/Markdown";
import { useSelector } from "react-redux";
import { selectBlogByTitle, selectPrevAndNextBlogByTitle } from "../../redux/selectors/blogSelector";
import './index.scss'
import lazyMarkdownImg from "../../utils/actions/lazyMarkdownImg";
const Comments = lazy(() => import('../Comments'))


function Post() {
    const localtion = useLocation();
    const navigate = useNavigate();
    const { title } = localtion.state;
    const blog = useSelector(state => selectBlogByTitle(state, title));
    const [prev, next] = useSelector(state => selectPrevAndNextBlogByTitle(state, title));
    const handleLinkOnClick = (title) => {
        if (title) {
            navigate('/post?title=' + title, { state: { title: title } });
        }
    }
    useEffect(() => {
        lazyMarkdownImg();
    });
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog ? blog.title : ''} _className="header" />
                <Markdown isPost={true} content={blog ? blog.content : ''} _className="content" />
            </div>
            <a className="prev-page" onClick={() => handleLinkOnClick(prev)}>上一篇: {prev ? prev : <span>没有了</span>}</a>
            <a className="next-page" onClick={() => handleLinkOnClick(next)}>下一篇: {next ? next : <span>没有了</span>}</a>
            <Comments title={title} />
        </div>
    )
}
export default (Post);