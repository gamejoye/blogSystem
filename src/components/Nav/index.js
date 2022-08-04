import React from "react";
import { useNavigate } from "react-router";
import './index.css'
import NotLogin from "./NotLogin";
import Logined from "./Logined";
import { getCookie } from "../../utils/apis/getCookie";

function Nav() {
    //标记一下，这里有点奇怪
    const navigate = useNavigate();
    const username = getCookie("username");
    return (
        <div>
            {(username && <Logined/>) || <NotLogin/>}
        </div>
    )
}

export default Nav;
 