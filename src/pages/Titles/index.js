import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TitleList from "./TitleList";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectName, selectTitles } from "../../redux/selectors";

function Titles() {
    const username = useSelector(selectName);
    const totalTitles = useSelector(selectTitles);
    const [titles, setTitles] = useState([]);
    const [page, setPage] = useState('');
    useEffect(() => {
        setTitles(totalTitles);
    }, [username]);

    useEffect(() => {
        if (page.trim() == '') {
            setTitles(totalTitles);
            return;
        }
        setTitles(totalTitles.filter(title => 
            title.includes(page)
        ));
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

export default Titles;