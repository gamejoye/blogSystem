import React, { lazy, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Markdown from "../../components/Markdown";
import { useSelector } from "react-redux";
import { selectBlogById, selectPrevAndNextBlogById } from "../../redux/selectors/blogSelector";
import './index.scss'
import lazyMarkdownImg from "../../utils/actions/lazyMarkdownImg";
import { IRootState } from "../../redux/store";
import CommentBox from "../../components/CommentBox";


function Post() {
    const blogId = parseInt(useParams()?.blogId ?? "0");
    const blog = useSelector((state: IRootState) => selectBlogById(state, blogId));
    useEffect(() => {
        lazyMarkdownImg();
    });
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog ? blog.title : ''} className="header" isPreview={false} />
                <Markdown content={blog ? blog.content : ''} className="content" isPreview={false} />
            </div>
            <CommentBox blogId={blogId} />
        </div>
    )
}
export default React.memo(Post);