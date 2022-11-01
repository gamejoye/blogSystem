import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setName } from "../../redux/actions";
import { getInstance,postInstance } from "../../utils/apis/axiosConfig";
import { BASE_URL } from "../../constant";
import { message } from "antd";
function Previous(props) {
    useEffect(() => {
        getInstance.get(BASE_URL+"user/username").then(
            (res) => {
                props.setName(res.data);
            }
        )
    })
    function handleLogin() {
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        postInstance.post(BASE_URL+'function/login', {
            username : username,
            password : password
        }).then(
            (res) => {
                if(res.data == "ok") {
                    message.success("登陆成功",1);
                    props.setName(username);
                } else {
                    message.error("用户名或密码错误",1);
                }
            }
        )
    }
    return (
        <div>
            <input placeholder='username' id="username"></input><br/>
            <input placeholder='password' type="password" id="password"></input><br/>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}
export default connect((
    (state) => ({name: state.name})
),{setName}
)(Previous);