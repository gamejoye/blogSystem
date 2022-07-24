import React from "react";
import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons";
import './way.css'

import { baseUrl } from "../../constant";
import { postInstance } from "../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";

function Way(props) {
    const action = props.action;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    var isSuccess;
    function handlerSubmit() {
        postInstance.post(baseUrl + 'function/' + action, {
            username: username,
            password: password
        }).then(
            (res) => {
                isSuccess = res.data;
                if (isSuccess !== 'failed') {
                    document.cookie = "username=" + isSuccess.name;
                }
            }
        )
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div className="first">
            <div className="second">
                <h1>Login</h1>
                <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="third"
                />
                <Input.Password placeholder="input password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="third"
                />
                <Button id="submit"
                    onClick={handlerSubmit}
                    className="third"
                >{action}</Button><br />
            </div>
        </div>
    )
}
export default (Way);
