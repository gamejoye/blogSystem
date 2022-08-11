import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


import { postInstance } from "../../utils/apis/axiosConfig";
import { username } from "../../constant";

function Creation(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [order, setOrder] = useState(1);

    function handlerSubmit() {
        postInstance.post('blogs/'+'addition',{
            username: username,
            title: title,
            content: content,
            order: order
        }).then(
            (res) => {
                if(res.data === 'successfully added') {
                    navigate('/home');
                } else {
                    alert('This blog already exists, please change it to a new blog name');
                }
            }
        )
    }
    return (
        <div>
            <b>title:</b><input
                id="titleInput"
                onChange={(e) => { setTitle(e.target.value) }}
            /><br/>
            <b>content:</b><textarea rows="10" cols="30"
                id="contentInput"
                onChange={(e) => { setContent(e.target.value) }}
            >
            </textarea><br/>
            <b>order:</b><input
                id="orderInput"
                type="number"
                onChange={(e) => { setOrder(e.target.value) }}
            /><br/>
            <button
                onClick={handlerSubmit}
            >Submit</button>
        </div>
    )
}

export default (Creation)