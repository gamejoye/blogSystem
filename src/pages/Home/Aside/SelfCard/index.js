import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAboutMe } from "../../../../redux/selectors/userInfoSelector";
import './index.css'

function SelfCard() {
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

export default React.memo(SelfCard);