import React from "react";
import { useState } from "react";
import './index.css'

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
