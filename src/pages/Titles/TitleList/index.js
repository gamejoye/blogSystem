import React from "react";
import { Divider } from "antd";

function TitleList({ handleOnClick, titles }) {
    const titleItems = titles.map((title, index) => {
        return (
            <div key={index} onClick={() => handleOnClick(title)}>
                <Divider />
                <p>{title}</p>
            </div>
        )
    })
    return (
        <div>
            {titleItems}
        </div>
    )
}

export default TitleList;