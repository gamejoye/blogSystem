import React, { useState } from "react";
import PostCard from "./PostCard";
import DeleteDialog from "../../PopUpWindow/DeleteDialog";
import { BASE_URL } from "../../../constant";
function Posts(props) {
    const blogs = props.blogs;
    const url = BASE_URL + "blogs/deletion";
    const [id, setId] = useState(-1);
    const posts = blogs.map((blog, index) => {
        return (
            <PostCard
                key={index}
                blog={blog}
                setId={setId}
            />
        )
    });
    return (
        <>
            {posts}
            <DeleteDialog url={url} data={{id:id}} />
        </>
    )
}
export default Posts;