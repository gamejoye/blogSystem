import React from "react";
import PostCard from "./PostCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectFilterTagsBlogs } from "../../../redux/selectors/blogSelector";
import { IBlog } from "../../../types";
function Posts() {
    const navigate = useNavigate();
    const totalBlogs = useSelector(selectFilterTagsBlogs);
    const handleOnClick = (blog: IBlog) => {
        navigate(`/post/${blog.id}`)
    }
    const posts = totalBlogs.map((blog) => {
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