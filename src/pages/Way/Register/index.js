import React from "react";
import { useState } from "react";
import { Button, Input } from "antd";
import './index.css'

import { baseUrl } from "../../../constant";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    var isSuccess;
    function handlerSubmit() {
        postInstance.post(baseUrl + 'function/' + "register", {
            username: username,
            password: password
        }).then(
            (res) => {
                isSuccess = res.data;
                if (isSuccess === 'failed') {
                    alert('用户名已经存在，注册失败')
                }
            }
        )
        setTimeout(() => {
            alert('1秒后将跳转到登陆页面的');
            navigate('/login');
        }, 1000);
    }
    
    return (
        <div className="first">
            <div className="second">
                <h1>Register</h1>
                <Input
                    placeholder="Enter your username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="third"
                />
                <Input.Password placeholder="enter password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="third"
                />
                <Input.Password placeholder="enter password again"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="third"
                />
                <Button id="submit"
                    onClick={handlerSubmit}
                    className="third"
                >register</Button><br />
                <p>已有用户?<a onClick={props.toLogin}>登陆</a></p>
            </div>
        </div>
    )
}
export default (Register);
