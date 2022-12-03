import React, { useState } from "react";
import PostCard from "./PostCard";
import DeleteDialog from "../../Window/DeleteDialog";
import { BASE_URL } from "../../../constant";
import { useNavigate } from "react-router";
function Posts({ totalBlogs }) {
    const url = BASE_URL + "blogs/deletion";
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    const handleOnclick = blog => {
        navigate('/post?title=' + blog.title, { state: { title: blog.title } })
    }
    const handleDelete = e => blog => {
        //阻止事件冒泡 防止执行父元素定义的事件
        e.stopPropagation();
        setBlog(blog);
        document.getElementById("root").style.filter = 'brightness(0.5)';
        document.getElementById("delete-dialog").style.display = 'block';
    }
    const posts = totalBlogs.map((blog, index) => {
        return (
            <PostCard
                key={index}
                blog={blog}
                handleOnclick={handleOnclick}
                handleDelete={handleDelete}
            />
        )
    });
    return (
        <>
            {posts}
            <DeleteDialog url={url} data={blog}/>
        </>
    )
}
export default Posts;