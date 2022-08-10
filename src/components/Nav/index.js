import React from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import './index.css'
import NotLogin from "./NotLogin";
import Logined from "./Logined";

function Nav(props) {
    //标记一下，这里有点奇怪
    return (
        <Logined/>
    )
}

export default (Nav);
 