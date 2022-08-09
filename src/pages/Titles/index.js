import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import TitleList from "./TitleList";
import Search from "./Search";

import { getInstance } from "../../utils/apis/axiosConfig";
import { baseUrl } from "../../constant";
import { connect } from "react-redux";

function Titles(props) {
    const [totalTitles, setTotalTitles] = useState([]);
    const [titles, setTitles] = useState([]);
    const [page, setPage] = useState('');
    const navigate = useNavigate();
    const username = props.username;
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

    useEffect(() => {
        if (page.trim() == '') {
            setTitles(totalTitles);
            return;
        }
        var temporary = [];
        for (let i = 0; i < totalTitles.length; i++) {
            if (totalTitles[i].match(page)) {
                temporary.push(totalTitles[i]);
            }
        }
        setTitles(temporary);
    }, [page]);

    return (
        <div>
            <Search
                page={page}
                setPage={setPage}
            ></Search>
            <TitleList titles={titles}></TitleList>
        </div>
    )
}

export default connect((state) => {
    return ({
        username: state.user
    })
})(Titles);
