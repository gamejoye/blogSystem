import React from "react";
import { createPortal } from "react-dom";
import { handleRemovePrompt } from "../../../constant";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { BASE_URL } from "../../../constant";
import { message } from "antd";
import { connect } from "react-redux";
import { setName } from "../../../redux/actions";
import { CloseOutlined } from "@ant-design/icons";
import { setCookie } from "../../../utils/apis/cookie/setCookie";
import './index.css'

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        document.getElementById("prompt-root").appendChild(this.el);
    };
    componentWillUnmount() {
        document.getElementById("prompt-root").removeChild(this.el);
    }
    render() {
        const handleSubmit = (e) => {
            e.preventDefault();
            handleRemovePrompt(document.getElementById("login-dialog"));
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();
            postInstance.post(BASE_URL + 'function/login', {
                username: username,
                password: password
            }).then(
                (res) => {
                    if (res.data == "ok") { 
                        setCookie("user", username);
                        message.success("登陆成功", 1);
                        this.props.setName(username);
                    } else {
                        message.error("用户名或密码错误", 1);
                    }
                }
            )
        }
        const handleClose = () => {
            handleRemovePrompt(document.getElementById("login-dialog"));
        }
        return createPortal(
            <div id="login-dialog">
                <div className="close-bar">
                    <CloseOutlined style={{ color: '#ffffff' }} className="close-btn" onClick={handleClose} />
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                    <h2>终于等到你~</h2>
                    <input placeholder='username' id="username"></input>
                    <input placeholder='password' type="password" id="password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>,
            this.el
        )
    }
}
export default connect((
    (state) => ({ name: state.name })
), { setName }
)(LoginDialog);