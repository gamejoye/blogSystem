import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { selectBlogsByTag } from "../../redux/selectors/blogSelector";
import { IRootState } from "../../redux/store";
import { IBlog } from "../../types";
import '../Classification/index.scss'

function BlogDetail() {
    const navigate = useNavigate();
    const tag = useParams().tag ?? "";
    const blogs = useSelector((state: IRootState) => selectBlogsByTag(state, tag));
    if (!tag) {
        return <></>
    }
    const handleTitleOnClick = (blog: IBlog) => {
        navigate(`/post/${blog.id}`);
    }
    return (
        <div className="border-container">
            {blogs.map((blog, idx) => {
                return (<div onClick={() => handleTitleOnClick(blog)} key={blog.id} className="content-show title-show">
                    {blog.title}
                </div>)
            })}
        </div>
    )
}
export default BlogDetail;