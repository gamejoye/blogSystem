import React from "react";
import { useState } from "react";
import { Button, Input } from "antd";
import './index.css'

import { baseUrl } from "../../constant";
import { postInstance } from "../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";
import Login from "./Login";
import Register from "./Register";

function Way(props) {
    const [action,setAction] = useState('login');
    return (
        <div>
            {(action=="login" && 
            <Login toRegister={() => {setAction("register")}}/>) || 
            <Register toLogin={() => {setAction("login")}}/>}
        </div>
    )
}
export default (Way);
