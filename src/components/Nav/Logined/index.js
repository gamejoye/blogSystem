import React from "react";
import './index.css'
import { HomeOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router";
import './index.css'

import { map } from "../../../constant";

function Logined(props) {
    const navigate = useNavigate();
    const username = props.username;
    const handlerButton = (value) => {
        const param = map[value];
        if (param === 'logout') {
            setTimeout(() => {
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                navigate('/login');
            }, 1000);
            return;
        }
        navigate('/' + param);
    }
    return (
        <ul className="menu">
            <li className="nav-home"><a onClick={() => handlerButton("主页")}><HomeOutlined/></a></li>
            <li><a onClick={() => handlerButton("文章")}>文章</a></li>
            <li><a onClick={() => handlerButton("个人资料")}>个人资料</a></li>
            <li style={{float:'right'}}><a onClick={(e) => handlerButton(e.target.innerHTML)}>退出</a></li>
        </ul>
    )
}

export default Logined