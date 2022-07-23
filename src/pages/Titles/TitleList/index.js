import React from "react";
import { useNavigate } from "react-router";

function TitleList(props) {
    const navigate = useNavigate();
    const titles = props.titles.map((title, index) => {
        return (
            <div key={index} onClick={() => {navigate('/post?title='+title,{ state: { title: title } }) }}>
                <hr/>
                <p><b>{index + 1}. </b>{title}</p>
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