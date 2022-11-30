import React from "react";
import { BASE_URL } from "../../../../constant";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setName } from "../../../../redux/reducers/nameReducer";
import { setCookie } from "../../../../utils/apis/cookie/setCookie";
import { loginWrapper } from "../WrapperLogin";
function Login(props) {
    const dispatch = useDispatch();
    const url = BASE_URL + 'function/login';
    const way = 'login';
    const Hearder = <h2>这里是登陆界面~</h2>;
    const Footer = (<div>
        <h2>没有有账号?<a onClick={props.toAnother}>注册</a></h2>
    </div>);
    const successCallback = (name) => {
        setCookie("user", name);
        message.success("登陆成功", 1);
        dispatch(setName(name));
    }
    const errorCallback = () => {
        message.error("用户名或密码错误", 1);
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
export default Login;