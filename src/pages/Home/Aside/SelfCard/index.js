import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import './index.css'

import { getInstance } from "../../../../utils/apis/axiosConfig";
import { connect } from "react-redux";
import { baseUrl } from "../../../../constant";

function SelfCard(props) {
    const username = props.username
    const [aboutMe, setAboutMe] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getInstance.get(baseUrl + 'user/introduction/aboutMe', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                res.data ? setAboutMe(res.data):setAboutMe('暂无简介');
            }
        )
    }, [1]);

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

export default connect((state) => {
    return ({
        username: state.user
    })
})(SelfCard)