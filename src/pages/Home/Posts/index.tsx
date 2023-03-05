import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAllBlogs, selectFilterTagsBlogs } from "../../../redux/selectors/blogSelector";
import { IBlog } from "../../../types";
function Posts() {
    const navigate = useNavigate();
    const blogs = useSelector(selectAllBlogs);
    const handleOnClick = (blog: IBlog) => {
        navigate(`/post/${blog.id}`)
    }
    const posts = blogs.map((blog) => {
        return (
            <PostCard
                key={blog.id}
                blog={blog}
                handleOnClick={handleOnClick}
            />
        )
    });
    return (
        <>
            {posts}
        </>
    )
}
export default Posts;