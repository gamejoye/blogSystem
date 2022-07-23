import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";

import { baseUrl } from "../../constant";

function Post(props) {
    const localtion = useLocation();
    const {title} = localtion.state;
    const navigate = useNavigate();
    const [blog,setBlog] = useState({});
    useEffect(() => {
        getInstance.get(baseUrl+'blogs/'+'title',{
            params: {
                titles: title
            }
        }).then(
            (res) => { setBlog(res.data); }
        )
    },[1]);
    return (<div>
        <button onClick={() => {navigate('/')}}>Home</button>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
    </div>)
}

export default Post;