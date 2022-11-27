import React from "react";
import { BASE_URL } from "../../../../constant";
import { message } from "antd";
import { loginWrapper } from "../WrapperLogin";
function Register(props) {
    const url = BASE_URL + 'function/register';
    const way = 'register';
    const Hearder = <h2>这里是注册界面哦~~</h2>
    const Footer = (<div>
        <h2>已经有账号了?<a onClick={props.toAnother}>登陆</a></h2>
    </div>);
    const successCallback = (name) => {
        message.success("注册成功", 1);
        props.toAnother();
    }
    const errorCallback = () => {
        message.error("注册失败", 1);
    }
    return loginWrapper(
        url,
        way,
        Hearder,
        Footer,
        successCallback,
        errorCallback
    )(
        props.handleOnBlur,
        props.handleClose
    )
}
export default (Register);