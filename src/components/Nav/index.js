import React from "react";
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from "react-router";

import { baseUrl } from "../../constant";
import { map } from "../../constant";
import { mapToindex } from "../../constant";
import { getCookie } from "../../utils/apis/getCookie";

const { Header } = Layout;

function Nav() {
    const navigate = useNavigate();
    const username = getCookie("username")
    const pathname = useLocation().pathname;
    const index = mapToindex(pathname)+"";
    console.log(pathname+"  "+index);
    function handlerButton(e) {
        const param = map[e.key];
        if(param === 'logout') {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            navigate('/');
            return;
        }
        navigate('/'+param);
    }
    if(!username) {
        return (
            <Header
                style={{backgroundColor: 'white'}}
            ><h1 style={{textAlign:'center'}}>Welcome to Gamejoye's blog project</h1></Header>
        )
    }
    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[index]}
                items={new Array(3).fill(null).map((_, index) => {
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