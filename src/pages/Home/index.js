import React from "react";
import { useState, useEffect } from "react";

import PostCard from "./PostCard";

import { getInstance } from "../../utils/apis/axiosConfig";
import { baseUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/apis/getCookie";

function Home(props) {
    const navigate = useNavigate();
    const gotoPath = (title)=> {
        //window.location.href = '/post?title='+title;
        navigate('/post?title='+title)
    };
    const [blogs, setBlogs] = useState([]);
    const username = getCookie("username");

    useEffect(() => {
        getInstance.get(baseUrl + 'blogs/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setBlogs(res.data);
            }
        )
    },[1]);

    const posts = blogs.map((blog, index) => {
        return (
            <div key={index}>
                <PostCard
                    blog={blog}
                    onClick={() => {gotoPath(blog.article_name)}}
                />
            </div>
        )
    })
    return (<div>
        {posts}
    </div>)
}

export default (Home);