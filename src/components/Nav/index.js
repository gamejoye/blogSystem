import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Divider, message } from "antd";
import { selectName } from "../../redux/selectors";
import { postInstance } from "../../utils/apis/axiosConfig";
import { setName } from "../../redux/actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import './index.css'

import { BASE_URL } from "../../constant";
import LoginDialog from "../../pages/Window/LoginDialog";
import { removeCookie } from "../../utils/apis/cookie/removeCookie";

const Tourist = (props) => {
    const handleLogin = () => {
        document.getElementById("root").style.filter = 'brightness(0.5)';
        document.getElementById("login-dialog").style.display = 'block';
        document.getElementById("username").focus();
        props.handlerButton("home");
    }
    return (
        <>
            <a onClick={handleLogin}>登陆/注册</a>
            <LoginDialog />
        </>
    )
}

const Logon = ({name, handlerButton, handleLogout}) => {
    return (
        <>
            <a onClick={() => handlerButton("about")}><UserOutlined /> {name}</a>
            <div className="pull-down">
                <a onClick={() => handlerButton("creation")}>发文章</a>
                <a onClick={() => handleLogout()}>退出登陆</a>
            </div>
        </>
    )
}

function Nav(props) {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlerButton = (value) => {
        navigate("/" + value);
    }
    const handleLogout = () => {
        postInstance.post(BASE_URL + "user/logout").then(
            () => {
                //等待服务端删除session之后再注销全局name
                message.success("退出成功", 1);
                dispatch(setName(""));
                removeCookie("user");
                handlerButton("home");
            }
        );
    }
    return (
        <ul className="menu">
            <li className="home base"><a onClick={() => handlerButton("home")}><HomeOutlined /></a></li>
            <li className="base"><a onClick={() => handlerButton("titles")}>文章</a></li>
            <div className="user base">
                {(name && <Logon
                    handlerButton={handlerButton}
                    handleLogout={handleLogout}
                    name={name}
                    navigate={navigate}
                />) || <Tourist
                        handlerButton={handlerButton}
                        navigate={navigate}
                    />}
            </div>
        </ul>
    )
}

export default Nav;
