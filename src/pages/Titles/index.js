import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TitleList from "./TitleList";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/selectors/userInfoSelector";
import { selectTitles } from "../../redux/selectors/blogSelector";
import { useNavigate } from "react-router";

function Titles() {
    const username = useSelector(selectName);
    const totalTitles = useSelector(selectTitles);
    const navigate = useNavigate();
    const [titles, setTitles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleTitleOnClick = (title) => {
        navigate('/post?title=' + title, { state: { title: title } })
    }
    useEffect(() => {
        setTitles(totalTitles);
    }, [username, totalTitles]);

    useEffect(() => {
        if (searchTerm.trim() == '') {
            setTitles(totalTitles);
            return;
        }
        setTitles(totalTitles.filter(title =>
            title.toUpperCase().includes(searchTerm.toUpperCase())
        ));
    }, [searchTerm]);

    return (
        <div>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            ></Search>
            <TitleList
                handleOnClick={handleTitleOnClick}
                titles={titles}
            />
        </div>
    )
}

export default Titles;