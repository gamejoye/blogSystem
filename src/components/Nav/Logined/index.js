import React from "react";
import './index.css'

import { useNavigate } from "react-router";
import './index.css'

import { map } from "../../../constant";

function Logined(props) {
    const navigate = useNavigate();
    const username = props.username;
    const handlerButton = (value) => {
        console.log(value);
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
            <li><a onClick={(e) => handlerButton(e.target.innerHTML)}>主页</a></li>
            <li><a onClick={(e) => handlerButton(e.target.innerHTML)}>标题</a></li>
            <li ><a onClick={(e) => handlerButton(e.target.innerHTML)}>个人资料</a></li>
            <li style={{float:'right'}}><a onClick={(e) => handlerButton(e.target.innerHTML)}>退出</a></li>
        </ul>
    )
}

export default Logined