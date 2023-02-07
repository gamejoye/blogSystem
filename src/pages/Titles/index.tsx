import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilterSearchTerm } from "../../redux/selectors/blogSelector";
import { useNavigate } from "react-router";
import { IBlog } from "../../types";
import { IRootState } from "../../redux/store";
import SearchBar from "./SearchBar";
import TitleList from "./TitleList";

function Titles() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const blogs = useSelector((state: IRootState) => selectFilterSearchTerm(state, searchTerm));
    const handleTitleOnClick = (blog: IBlog) => {
        navigate(`/post/${blog.id}`)
    }
    return (
        <div>
            <SearchBar
                setSearchTerm={setSearchTerm}
            ></SearchBar>
            <TitleList
                handleOnClick={handleTitleOnClick}
                blogs={blogs}
            />
        </div>
    )
}

export default Titles;