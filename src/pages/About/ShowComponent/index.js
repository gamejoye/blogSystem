import React from "react";
import './index.scss'

function ShowComponent({ data, setEdit, children }) {
    return (
        <div>
            <span className="show-container">
                <p>{data ? data : '暂无'}</p>
                <button
                    id="aboutMeEdit"
                    onClick={() => setEdit(true)}
                >Edit</button>
            </span>
            {children}
        </div>
    )
}
export default ShowComponent;