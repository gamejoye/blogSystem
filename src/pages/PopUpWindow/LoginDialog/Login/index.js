import React, { useState } from "react";
import { handleRemovePrompt } from "../../../../constant";
import { postInstance } from "../../../../utils/apis/axiosConfig";
import { BASE_URL } from "../../../../constant";
import { message } from "antd";
import { connect } from "react-redux";
import { setName } from "../../../../redux/actions";
import { setCookie } from "../../../../utils/apis/cookie/setCookie";
import { CloseOutlined } from "@ant-design/icons";
import './index.css'

function Login(props) {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRemovePrompt(document.getElementById("login-dialog"));
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        if (username.length < 6 || username.length > 12) {
            message.error("用户名长度必须在6-12之间", 2);
            return;
        } else if (password.length < 6 || password.length > 12) {
            message.error("密码长度必须在6-12之间", 2);
            return;
        }
        postInstance.post(BASE_URL + 'function/login', {
            username: username,
            password: password
        }).then(
            (res) => {
                if (res.data == "ok") {
                    setCookie("user", username);
                    message.success("登陆成功", 1);
                    props.setName(username);
                } else {
                    message.error("用户名或密码错误", 1);
                }
            }
        )
    }

    return (
        <>
            <div className="close-bar">
                <CloseOutlined style={{ color: '#ffffff' }} className="close-btn" onClick={() => props.handleClose(setUsernameError, setPasswordError)} />
            </div>
            <form id="login-form" onSubmit={handleSubmit}>
                <h2>这里是登陆界面~</h2>
                <input placeholder='username' id="username" onBlur={(e) => props.handleOnBlur(e, "用户名长度必须在6-12之间", setUsernameError)}></input>
                <p className="error-msg">{usernameError}</p>
                <input placeholder='password' type="password" id="password" onBlur={(e) => props.handleOnBlur(e, "密码长度必须在6-12之间", setPasswordError)}></input>
                <p className="error-msg">{passwordError}</p>
                <button type="submit">Login</button>
            </form>
            <div>
                <h2>没有有账号?<a onClick={props.toAnother}>注册</a></h2>
            </div>
        </>
    )
}
export default connect((
    (state) => ({ name: state.name })
), { setName }
)(Login);