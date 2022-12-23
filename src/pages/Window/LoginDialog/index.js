import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { handleRemovePrompt } from "../../../utils/actions";
import Login from "./Login";
import Register from "./Register";
import './index.scss'

function LoginDialog() {
    const [el] = useState(document.createElement('div'));
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        document.getElementById("prompt-root").appendChild(el);
        return () => {
            document.getElementById("prompt-root").removeChild(el);
        }
    })
    const handleToAnother = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
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
            (isLogin
                && <Login toAnother={handleToAnother} handleOnBlur={handleOnBlur} handleClose={handleClose} />)
            || <Register toAnother={handleToAnother} handleOnBlur={handleOnBlur} handleClose={handleClose} />
        }
        </div>,
        el
    )
}
export default (LoginDialog);