import React from "react";
import { useNavigate } from "react-router";

function TitleList(props) {
    const navigate = useNavigate();
    const gotoPath = (title)=> {
        //window.location.href = '/post?title='+title;
        navigate('/post?title='+title)
    };
    const titles = props.titles.map((title, index) => {
        return (
            <div key={index} onClick={() => {gotoPath(title)}}>
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