import React from "react";
import { createPortal } from "react-dom";
import { handleRemovePrompt } from "../../../constant";
import Login from "./Login";
import Register from "./Register";
import './index.css'

class LoginDialog extends React.Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {
            isLogin: true
        }
    }
    componentDidMount() {
        document.getElementById("prompt-root").appendChild(this.el);
    };
    componentWillUnmount() {
        document.getElementById("prompt-root").removeChild(this.el);
    }
    render() {
        const handleToAnother = (e) => {
            e.preventDefault();
            this.setState({
                isLogin: !this.state.isLogin
            })
        }
        const handleClose = (setError1, setError2) => {
            setError1("");
            setError2("");
            handleRemovePrompt(document.getElementById("login-dialog"));
        }
        const handleOnBlur = (e, msg, setError) => {
            let value = e.target.value;
            if (value.length >= 6 && value.length <= 12) {
                setError("");
            } else {
                setError(msg);
            }
        }

        return createPortal(
            <div id="login-dialog"> {
                (this.state.isLogin
                    && <Login toAnother={handleToAnother} handleOnBlur={handleOnBlur} handleClose={handleClose} />)
                || <Register toAnother={handleToAnother} handleOnBlur={handleOnBlur} handleClose={handleClose} />
            }
            </div>,
            this.el
        )
    }
}
export default (LoginDialog);