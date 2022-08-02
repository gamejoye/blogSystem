import React, { useEffect } from "react";
import { useState } from "react";
import './index.css'

import { getInstance } from "../../../../utils/apis/axiosConfig";
import { getCookie } from "../../../../utils/apis/getCookie";
import { baseUrl } from "../../../../constant";

function SelfCard(props) {
    const username = getCookie("username");
    const [aboutMe, setAboutMe] = useState('');
    useEffect(() => {
        getInstance.get(baseUrl + 'user/introduction/aboutMe', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setAboutMe(res.data);
            }
        )
    }, [1]);

    return (
        <div
            className="selfcard"
        >
            <p className="self-p">
                <b>个人简介:&nbsp;&nbsp;</b>
                {aboutMe}
            </p>
        </div>
    )
}

export default SelfCard