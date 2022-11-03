import React from "react";
import './index.css'
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";

import { postInstance } from "../../utils/apis/axiosConfig";
import { setName } from "../../redux/actions";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import './index.css'

import { BASE_URL } from "../../constant";
import LoginDialog from "../../pages/Pop-up-window/LoginDialog";
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

const Logon = (props) => {
    return (
        <>
            <a onClick={() => props.handlerButton("about")}><UserOutlined /> {props.username}</a>
            <div className="user-content">
                <a onClick={() => props.handlerButton("creation")}>发文章</a>
                <a onClick={() => props.handleLogout()}>退出登陆</a>
            </div>
        </>
    )
}

function Nav(props) {
    const username = props.name;
    const navigate = useNavigate();
    const handlerButton = (value) => {
        navigate("/" + value);
    }
    const handleLogout = () => {
        postInstance.post(BASE_URL + "user/logout").then(
            () => {
                //等待服务端删除session之后再注销全局username
                message.success("退出成功", 1);
                props.setName("");
                removeCookie("user");
                handlerButton("home");
            }
        );
    }
    return (
        <ul className="primary_menu">
            <li className="primary_base nav-home"><a onClick={() => handlerButton("home")}><HomeOutlined /></a></li>
            <li className="primary_base"><a onClick={() => handlerButton("titles")}>文章</a></li>
            <div className="primary_base user">
                {(username && <Logon
                    handlerButton={handlerButton}
                    handleLogout={handleLogout}
                    username={username}
                    navigate={navigate}
                />) || <Tourist
                        handlerButton={handlerButton}
                        navigate={navigate}
                    />}
            </div>
        </ul>
    )
}

export default connect(
    (state) => ({
        name: state.name
    }), { setName }
)(Nav)
