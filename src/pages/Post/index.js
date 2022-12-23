import React, { lazy } from "react";
import { useLocation } from "react-router";
import Markdown from "../../components/Markdown";
import { useSelector } from "react-redux";
import { selectBlogByTitle } from "../../redux/selectors/blogSelector";
import './index.scss'
const Comments = lazy(() => import('../Comments'))


function Post() {
    const localtion = useLocation();
    const { title } = localtion.state;
    const blog = useSelector((state) => selectBlogByTitle(state, title));
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog[0].title} _className="header"/>
                <Markdown content={blog[0].content} _className="content"/>
            </div>
            <Comments title={title} />
        </div>
    )
}
export default React.memo(Post);