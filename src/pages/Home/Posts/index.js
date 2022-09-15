import React from "react";
import PostCard from "./PostCard";
import { useNavigate } from "react-router";
function Posts(props) {
    const navigate = useNavigate();
    const blogs = props.blogs;
    function handleOnclick(blog) {
        navigate('/post?title=' + blog.title, { state: { title: blog.title } })
    }
    const posts = blogs.map((blog, index) => {
        return (
            <PostCard key={index} blog={blog} onClick={() => handleOnclick(blog)} count={props.count} setCount={props.setCount}  />
        )
    });
    return (
        <>
            {posts}
        </>
    )
}
export default Posts;