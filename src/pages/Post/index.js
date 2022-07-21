import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";

import { baseUrl } from "../../constant";

function Post(props) {
    const location = useLocation();
    const titlename = location.search.split('=');
    const navigate = useNavigate();
    const [blog,setBlog] = useState({});
    useEffect(() => {
        getInstance.get(baseUrl+'blogs/'+'article_name',{
            params: {
                article_name: titlename[1]
            }
        }).then(
            (res) => { setBlog(res.data); }
        )
    },[1]);
    return (<div>
        <h1>{blog.article_name}</h1>
        <p>{blog.content}</p>
        <button onClick={() => {navigate('/')}}>Home</button>
    </div>)
}

export default Post;