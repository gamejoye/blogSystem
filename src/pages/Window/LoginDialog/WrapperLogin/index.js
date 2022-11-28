import React, { useState } from "react";
import { handleRemovePrompt } from "../../../../utils/actions";
import { postInstance } from "../../../../utils/apis/axios/axiosConfig";
import { message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import './index.css'
export const loginWrapper = (
    url,
    way,
    Header,
    Footer,
    successCallback,
    errorCallback
) => {
    return function (handleOnBlur, handleClose) {
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
            postInstance.post(url, {
                username: username,
                password: password
            }).then(
                (res) => {
                    if (res.data == "ok") {
                        successCallback(username);
                    } else {
                        errorCallback();
                    }
                }
            )
        }
        return (
            <>
                <div>
                    <CloseOutlined style={{ color: '#ffffff' }} className="close-btn" onClick={() => handleClose(setUsernameError, setPasswordError)} />
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                    {Header}
                    <input placeholder='username' id="username" onBlur={(e) => handleOnBlur(e, "用户名长度必须在6-12之间", setUsernameError)}></input>
                    <p className="error-msg">{usernameError}</p>
                    <input placeholder='password' type="password" id="password" onBlur={(e) => handleOnBlur(e, "密码长度必须在6-12之间", setPasswordError)}></input>
                    <p className="error-msg">{passwordError}</p>
                    <button type="submit">{way}</button>
                </form>
                {Footer}
            </>
        )
    }
}