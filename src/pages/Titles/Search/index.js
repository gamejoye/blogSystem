import React from "react";


function Search(props) {
    const page = props.page;
    return (
        <div>
            <input
                onChange={(e) => props.setPage(e.target.value)}
                placeholder='搜索文章标题...'
                autoFocus
            />
            <button
                onClick={props.search}
            > 查询
            </button>
            <button
                onClick={props.reset}
            >重置
            </button>
        </div>
    )
}

export default Search;