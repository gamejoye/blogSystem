import React from "react";
import './index.css'
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";

import { postInstance } from "../../utils/apis/axiosConfig";
import { setName } from "../../redux/actions";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import './index.css'

import { BASE_URL, map } from "../../constant";

function Nav(props) {
    const username = props.name;
    const navigate = useNavigate();
    const handlerButton = (value) => {
        const param = map[value];
        navigate("/" + param);
    }
    const handleLogout = () => {
        postInstance.post(BASE_URL+"user/logout").then(
            () => {
                //等待服务端删除session之后再注销全局username
                message.success("退出成功",1);
                props.setName("");
            }
        );
    }
    return (
        <ul className="primary_menu">
            <li className="primary_base nav-home"><a onClick={() => handlerButton("主页")}><HomeOutlined /></a></li>
            <li className="primary_base"><a onClick={() => handlerButton("文章")}>文章</a></li>
            <div className="primary_base user">
                <a onClick={() => handlerButton("个人资料")}><UserOutlined /> {username}</a>
                <div className="user-content">
                    <a onClick={() => handlerButton("发文章")}>发文章</a>
                    <a onClick={() => handleLogout()}>退出登陆</a>
                </div>
            </div>
        </ul>
    )
}

export default connect(
    (state) => ({
        name: state.name
    }),{setName}
)(Nav)
