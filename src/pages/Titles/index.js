import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import TitleList from "./TitleList";
import Search from "./Search";

import { getInstance } from "../../utils/apis/axiosConfig";
import { baseUrl } from "../../constant";
import { getCookie } from "../../utils/apis/getCookie";

function Titles(props) {
    const [totalTitles, setTotalTitles] = useState([]);
    const [titles, setTitles] = useState([]);
    const [page, setPage] = useState('');
    const username = getCookie("username");
    useEffect(() => {
        getInstance.get(baseUrl + 'titles/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setTitles(res.data);
                setTotalTitles(res.data);
            }
        );
    }, [1]);

    function hanlderSearch() {
        if (page.trim() == '') {
            alert('输入值不能为空!');
            return;
        }
        var temporary = [];
        for (let i = 0; i < totalTitles.length; i++) {
            if (totalTitles[i].match(page)) {
                temporary.push(totalTitles[i]);
            }
        }
        setTitles(temporary);
    }

    return (
        <div>
            <Search
                page={page}
                setPage={setPage}
                search={() => { hanlderSearch() }}
                reset={() => { setTitles(totalTitles) }}
            ></Search>
            <TitleList titles={titles}></TitleList>
        </div>
    )
}

export default (Titles);
