import React from "react";
import { useState } from "react";
import { Button } from "antd";

import { baseUrl } from "../../constant";
import { postInstance } from "../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";

function Way(props) {
    const action = props.action;
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    var isSuccess;
    function handlerSubmit() {
        postInstance.post(baseUrl+'function/'+action,{
            username: username,
            password: password
        }).then(
            (res) => {
                isSuccess = res.data;
                if(isSuccess !== 'failed') {
                    document.cookie="username="+isSuccess.name;
                }
            }
        )
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div>
            <b>UserName: </b><input onChange={(e)=>setUsername(e.target.value)}></input><br/>
            <b>PassWord: </b><input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <Button id="submit" onClick={handlerSubmit}>{action}</Button><br/>
        </div>
    )
}
export default (Way);
