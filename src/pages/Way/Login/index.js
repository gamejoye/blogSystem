import React from "react";
import { useState } from "react";
import { Button, Input } from "antd";
import './index.css'
import { setUser } from "../../../redux/actions";

import { baseUrl } from "../../../constant";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handlerSubmit() {
        postInstance.post(baseUrl + 'function/' + "login", {
            username: username,
            password: password
        }).then(
            (res) => {
                const isSuccess = res.data;
                if (isSuccess !== 'failed') {
                    props.setUser(username);
                    localStorage.setItem('username',username);
                    setTimeout(() => {navigate('/')},1000);
                } else {
                    alert('用户名或密码错误');
                }
            }
        )
    }
    return (
        <div className="login-first">
            <div className="login-second">
                <h1>Login</h1>
                <Input
                    maxLength={30}
                    placeholder="Enter your username"
                    value={username.trim().replace(/[^a-zA-Z0-9]/, "")}
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="login-third"
                />
                <Input.Password placeholder="enter password"
                    maxLength={30}
                    value={password.trim().replace(/[^a-zA-Z0-9]/, "")}
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="login-third"
                />
                <Button id="submit"
                    onClick={handlerSubmit}
                    value={username.trim().replace(/[^a-zA-Z0-9]/, "")}
                    className="login-third"
                >login</Button><br />
                <p>没有用户?<a onClick={props.toRegister}>注册</a></p>
            </div>
        </div>
    )
}
export default connect((state) => {
    return ({})
},{setUser})(Login);
