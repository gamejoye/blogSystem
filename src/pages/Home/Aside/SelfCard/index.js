import React from "react";
import { useNavigate } from "react-router";
import './index.css'
import { useSelector } from "react-redux";
import { selectAboutMe, selectName } from "../../../../redux/selectors";

function SelfCard() {
    const username = useSelector(selectName);
    const aboutMe = useSelector(selectAboutMe);
    const navigate = useNavigate();
    return (
        <div
            className="selfcard"
            onClick={() => {navigate('/about')}}
        >
            <p className="self-p">
                <b>个人简介:</b>
                {aboutMe}
            </p>
        </div>
    )
}

export default SelfCard;