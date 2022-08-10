import React from "react";
import './index.css'
import { HomeOutlined } from "@ant-design/icons";

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
            <li className="nav-home"><a onClick={() => handlerButton("主页")}><HomeOutlined/></a></li>
            <li><a onClick={() => handlerButton("文章")}>文章</a></li>
            <li><a onClick={() => handlerButton("个人资料")}>个人资料</a></li>
        </ul>
    )
}

export default (Nav)
 