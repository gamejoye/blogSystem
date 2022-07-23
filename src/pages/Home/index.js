import React from "react";
import { Button } from "antd";
import 'antd/dist/antd.css';

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

import { getInstance } from "../../utils/apis/axiosConfig";
import { baseUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/apis/getCookie";

function Home(props) {
    const navigate = useNavigate();
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
    }, [1])

    const posts = blogs.map((blog, index) => {
        return (
            <div key={index} >
                <PostCard
                    blog={blog}
                    onClick={() => { navigate('/post?title=' + blog.title, { state: { title: blog.title } }) }}
                />
            </div>
        )
    })
    return (
        <div style={{ textAlign: 'center' ,width: 600}}>
            {posts}
            <Button onClick={() => { navigate('/titles') }}>文章</Button>
        </div>
    )
}

export default (Home);