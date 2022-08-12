import React from "react";
import './index.css'
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { username } from "../../constant";

import { useNavigate } from "react-router";
import './index.css'

import { map } from "../../constant";

function Nav(props) {
    const navigate = useNavigate();
    const handlerButton = (value) => {
        const param = map[value];
        navigate('/' + param);
    }
    return (
        <ul className="menu">
            <li className="nav-home"><a onClick={() => handlerButton("主页")}><HomeOutlined /></a></li>
            <li><a onClick={() => handlerButton("文章")}>文章</a></li>
            <div className="user">
                <a onClick={() => handlerButton("个人资料")}><UserOutlined /> {username}</a>
                <div className="user-content">
                    <a onClick={() => handlerButton("发文章")}>发文章</a>
                </div>
            </div>
        </ul>
    )
}

export default (Nav)
