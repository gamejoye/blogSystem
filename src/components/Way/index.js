import React from "react";
import { useState } from "react";
import { setUserName } from "../../redux/actions";

import { baseUrl } from "../../constant";
import { postInstance } from "../../utils/apis/axiosConfig";

function Way(props) {
    const action = props.action;
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    var isSuccess;
    function handlerSubmit() {
        postInstance.post(baseUrl+'function/'+action,{
            username: username,
            password: password
        }).then(
            (res) => {
                isSuccess = res.data;
                if(isSuccess !== 'failed') {
                    setUserName(isSuccess.name);
                    props.setUserName(username);
                }
            }
        )
    }
    return (
        <div>
            <b>UserName: </b><input onChange={(e)=>setUsername(e.target.value)}></input><br/>
            <b>PassWord: </b><input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <button id="submit" onClick={handlerSubmit}>{action}</button><br/>
        </div>
    )
}
export default (Way);
