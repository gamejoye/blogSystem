import React from "react";
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router";
import './index.css'

import { map } from "../../constant";
import { getCookie } from "../../utils/apis/getCookie";

const { Header } = Layout;

function Nav() {
    const navigate = useNavigate();
    const username = getCookie("username");
    function handlerButton(e) {
        const param = map[e.key];
        if (param === 'logout') {
            setTimeout(() => {
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                navigate('/');
            }, 1000);
            return;
        }
        navigate('/' + param);
    }
    if (!username) {
        return (
            <div>
                <div
                    className="notLogIn"
                ><h1
                    className="notLogInh1"
                >Welcome to Gamejoye's blog project</h1>
                </div>
            </div>
        )
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

export default Nav;