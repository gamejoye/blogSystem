import React from "react";
import { useState } from "react";
import { postInstance } from "../../../../utils/apis/axiosConfig";
import { BASE_URL } from "../../../../constant";
import './index.css'
import { message } from "antd";
function Register(props) {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        if(username.length < 6 || username.length > 12) {
            message.error("用户名长度必须在6-12之间", 2);
            return;
        } else if(password.length < 6 || password.length > 12) {
            message.error("密码长度必须在6-12之间", 2);
            return;
        }
        postInstance.post(BASE_URL + 'function/register', {
            username: username,
            password: password
        }).then(
            (res) => {
                if (res.data == "ok") { 
                    message.success("注册成功", 1);
                    props.toAnother();
                } else {
                    message.error("注册失败", 1);
                }
            }
        )
    }
    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <h2>这里是注册界面哦~~</h2>
                <input placeholder='username' id="username" onBlur={(e) => props.handleOnBlur(e, "用户名长度必须在6-12之间", setUsernameError)}></input>
                <p className="error-msg">{usernameError}</p>
                <input placeholder='password' type="password" id="password" onBlur={(e) => props.handleOnBlur(e, "密码长度必须在6-12之间", setPasswordError)}></input>
                <p className="error-msg">{passwordError}</p>
                <button type="submit">Register</button>
            </form>
            <div>
                <h2>已经有账号了?<a onClick={props.toAnother}>登陆</a></h2>
            </div>
        </>
    )
}
export default (Register);