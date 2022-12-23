import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";

import { postInstance } from "../../utils/apis/axios/config";
import { setName } from "../../redux/reducers/userInfoReducer";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constant";
import LoginDialog from "../../pages/Window/LoginDialog";
import { removeCookie } from "../../utils/apis/cookie/removeCookie";
import { handleShowPrompt } from "../../utils/actions";
import './index.scss'
import { selectName } from "../../redux/selectors/userInfoSelector";

const Tourist = ({handlerButton}) => {
    const handleLogin = () => {
        handleShowPrompt(document.getElementById("login-dialog"));
        document.getElementById("username").focus();
        handlerButton("home");
    }
    return (
        <>
            <a onClick={handleLogin}>登陆/注册</a>
            <LoginDialog />
        </>
    )
}

const Logon = ({ name, handlerButton, handleLogout }) => {
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

function Nav() {
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
            <div className="list base">
                <a style={{'cursor':'default'}}>文章</a>
                <div className="pull-down">
                    <a onClick={() => handlerButton("classification")}>分类</a>
                    <a onClick={() => handlerButton("titles")}>搜索</a>
                </div>
            </div>
            <div className="list base settings">
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

export default React.memo(Nav);
