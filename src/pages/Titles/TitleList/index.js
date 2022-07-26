import React from "react";
import { useNavigate } from "react-router";
import { Divider } from "antd";
import './index.css'

function TitleList(props) {
    const navigate = useNavigate();
    const titles = props.titles.map((title, index) => {
        return (
            <div key={index} onClick={() => {navigate('/post?title='+title,{ state: { title: title } }) }}>
                <Divider></Divider>
                <p>{title}</p>
            </div>
        )
    })
    return (
        <div>
            {titles}
        </div>
    )
}

export default TitleList;