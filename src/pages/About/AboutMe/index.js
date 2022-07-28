import React from "react";
import { getInstance, postInstance } from "../../../utils/apis/axiosConfig";
import { baseUrl } from "../../../constant";

import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/apis/getCookie";

function AboutMe(props) {
    const username = getCookie("username");

    const [aboutMe, setAboutMe] = useState('');
    const [isEdit, setEdit] = useState(false);
    const [preAboutMe, setPreAboutMe] = useState('');
    useEffect(() => {
        getInstance.get(baseUrl + 'user/' + 'introduction', {
            params: {
                username: username
            }
        }
        ).then(
            (res) => {
                setAboutMe(res.data);
                setPreAboutMe(res.data);
            }
        )
    }, [1]);

    function handlerSubmit() {
        postInstance.post(baseUrl + 'user/' + 'edit', {
            username: username,
            aboutMe: aboutMe
        });
        setPreAboutMe(aboutMe);
        setEdit(false);
    }

    function handlerCancel() {
        setEdit(false);
        setAboutMe(preAboutMe);
    }

    return (
        <div>
            <h2>Self-Introduction:</h2>
            {isEdit &&
                <div>
                    <input
                        defaultValue={preAboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                    <button onClick={() => handlerSubmit()}>Submit</button>
                    <button onClick={() => handlerCancel()}>Cancel</button>
                </div>
            }
            {!isEdit &&
                <div>
                    <p>{aboutMe}</p>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            }
        </div>
    )
}

export default AboutMe;