import React from "react";
import './index.scss'

interface IProps {
    setSearchTerm: (searchTerm: string) => void;
}

function SearchBar({ setSearchTerm }: IProps) {
    return (
        <div>
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索文章标题..."
                autoFocus
                className="search-bar"
            />
        </div>
    )
}

export default SearchBar;