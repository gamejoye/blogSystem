import React from "react";
import { useState } from "react";
import { Button, Input } from "antd";
import './index.css'

import { baseUrl } from "../../../constant";
import { postInstance } from "../../../utils/apis/axiosConfig";

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    function handlerSubmit() {
        if(username.length < 6) {
            alert('用户名太短');
            return;
        }
        if(password != repeatPassword) {
            alert('两次密码不一致');
            return;
        }
        postInstance.post(baseUrl + 'function/' + "register", {
            username: username,
            password: password
        }).then(
            (res) => {
                const isSuccess = res.data;
                if(isSuccess === 'failed') {
                    alert('用户名已经存在，注册失败')
                } else {
                    alert('1秒后将跳转到登陆页面的');
                    setTimeout(() => {
                        props.toLogin();
                    }, 1000);
                }
            }
        )
    }

    return (
        <div className="register-first">
            <div className="register-second">
                <h1>Register</h1>
                <Input
                    placeholder="Enter your username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="register-third"
                />
                <Input.Password placeholder="enter password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="register-third"
                />
                <Input.Password placeholder="enter password again"
                    onChange={(e) => { setRepeatPassword(e.target.value); }}
                    className="register-third"
                />
                <Button id="submit"
                    onClick={handlerSubmit}
                    className="register-third"
                >register</Button><br />
                <p>已有用户?<a onClick={props.toLogin}>登陆</a></p>
            </div>
        </div>
    )
}
export default (Register);
