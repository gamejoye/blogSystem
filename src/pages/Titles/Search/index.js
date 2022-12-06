import React from "react";

function Search({setSearchTerm}) {
    return (
        <div>
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索文章标题..."
                autoFocus
            />
        </div>
    )
}

export default Search;