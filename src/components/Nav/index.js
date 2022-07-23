import React from "react";
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router";

import { baseUrl } from "../../constant";

const { Header } = Layout;
const map = [
    'home',
    'titles'
]

function Nav() {
    const navigate = useNavigate();
    function handlerButton(e) {
        const param = map[e.key];
        navigate('/'+param);
    }
    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                items={new Array(2).fill(null).map((_, index) => {
                    return {
                        key: index,
                        label: map[index]
                    };
                })}
                onClick={(e) => handlerButton(e)}
            ></Menu>
        </Header>
    )

}

export default Nav;