import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { getInstance } from "../../utils/apis/axiosConfig";
import TitleList from "./TitleList";
import { baseUrl } from "../../constant";
import { getCookie } from "../../utils/apis/getCookie";

function Titles(props) {
    const [titles,setTitles] = useState([]);
    const username = getCookie("username");
    useEffect(() => {
        getInstance.get(baseUrl + 'titles/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setTitles(res.data);
            }
        );
    },titles);

    return (
        <TitleList titles={titles}></TitleList>
    )
}

export default (Titles);
