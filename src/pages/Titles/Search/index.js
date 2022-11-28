import React from "react";

function Search({setPage}) {
    const placeholder = '搜索文章标题...';
    return (
        <div>
            <input
                onChange={(e) => setPage(e.target.value)}
                placeholder={placeholder}
                autoFocus
            />
        </div>
    )
}

export default Search;