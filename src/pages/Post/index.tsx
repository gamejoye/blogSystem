import React, { lazy, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Markdown from "../../components/Markdown";
import { useSelector } from "react-redux";
import { selectBlogById, selectPrevAndNextBlogById } from "../../redux/selectors/blogSelector";
import './index.scss'
import lazyMarkdownImg from "../../utils/actions/lazyMarkdownImg";
import { IRootState } from "../../redux/store";
const CommentBox = lazy(() => import('../CommentBox'))


function Post() {
    const navigate = useNavigate();
    const blogId = parseInt(useParams()?.blogId ?? "0");
    const blog = useSelector((state: IRootState) => selectBlogById(state, blogId));
    const [prev, next] = useSelector((state: IRootState) => selectPrevAndNextBlogById(state, blogId));
    const handleLinkOnClick = (id: number | null) => {
        if (id) {
            navigate(`/post/${id}`);
        }
    }
    useEffect(() => {
        lazyMarkdownImg();
    });
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog ? blog.title : ''} className="header" isPreview={false} />
                <Markdown content={blog ? blog.content : ''} className="content" isPreview={false} />
            </div>
            <a className="prev-page" onClick={() => handleLinkOnClick(prev)}>上一篇: {prev ? prev : <span>没有了</span>}</a>
            <a className="next-page" onClick={() => handleLinkOnClick(next)}>下一篇: {next ? next : <span>没有了</span>}</a>
            <CommentBox blogId={blogId} />
        </div>
    )
}
export default React.memo(Post);