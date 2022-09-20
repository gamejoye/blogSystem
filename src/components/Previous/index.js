import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setName } from "../../redux/actions";
import { getInstance,postInstance } from "../../utils/apis/axiosConfig";
import { BASE_URL } from "../../constant";
function Previous(props) {
    useEffect(() => {
        getInstance.get(BASE_URL+"user/username").then(
            (res) => {
                props.setName(res.data);
            }
        )
    })
    function handleLogin() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        postInstance.post(BASE_URL+'function/login', {
            username : username,
            password : password
        }).then(
            (res) => {
                if(res.data == "ok") {
                    props.setName(username);
                } else {
                    alert("登陆失败")
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