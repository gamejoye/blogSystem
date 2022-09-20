import React, { useState } from "react";
import PostCard from "./PostCard";
import Prompt from "../../../components/Prompt";
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
                count={props.count}
                setCount={props.setCount}
                setId={setId}
            />
        )
    });
    return (
        <>
            {posts}
            <Prompt url={url} data={{id:id}} count={props.count} setCount={props.setCount}/>
        </>
    )
}
export default Posts;