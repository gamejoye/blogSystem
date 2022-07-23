import React from "react";

function Search(props) {
    const page = props.page;
    const placeholder = '搜索文章标题...';
    return (
        <div>
            <input
                onChange={(e) => props.setPage(e.target.value)}
                placeholder={placeholder}
                autoFocus
            />
        </div>
    )
}

export default Search;