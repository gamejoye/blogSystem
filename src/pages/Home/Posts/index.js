import React, { useState } from "react";
import PostCard from "./PostCard";
import DeleteDialog from "../../Window/DeleteDialog";
import { BASE_URL } from "../../../constant";
function Posts({ totalBlogs }) {
    const url = BASE_URL + "blogs/deletion";
    const [blog, setBlog] = useState({});
    const posts = totalBlogs.map((blog, index) => {
        return (
            <PostCard
                key={index}
                blog={blog}
                setBlog={setBlog}
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