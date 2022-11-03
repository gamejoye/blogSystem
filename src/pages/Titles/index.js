import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import TitleList from "./TitleList";
import Search from "./Search";

import { getInstance } from "../../utils/apis/axiosConfig";
import { connect } from "react-redux";

function Titles(props) {
    const username = props.name
    const [totalTitles, setTotalTitles] = useState([]);
    const [titles, setTitles] = useState([]);
    const [page, setPage] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        getInstance.get('titles/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setTitles(res.data);
                setTotalTitles(res.data);
            }
        );
    });

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

export default connect(
    (state) => ({
        name: state.name
    })
)(Titles);
