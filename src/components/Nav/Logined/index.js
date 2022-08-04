import React from "react";
import './index.css'

import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router";
import './index.css'

import { map } from "../../../constant";

const { Header } = Layout;

function Logined(props) {
    const navigate = useNavigate();
    const username = props.username;
    const handlerButton = (e) => {
        const param = map[e.key];
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
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                items={new Array(4).fill(null).map((_, index) => {
                    return {
                        key: index,
                        label: map[index],
                    };
                })}
                onClick={(e) => handlerButton(e)}
            ></Menu>
        </Header>
    )
}

export default Logined