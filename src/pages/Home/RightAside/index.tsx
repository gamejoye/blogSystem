import React from "react";
import ClassificationBar from "./ClassificationBar";
import { Affix } from "antd";
import Introduction from "./Introduction";

const RightAside = () => {
    return (
        <Affix offsetTop={32}>
            <Introduction />
            <ClassificationBar />
        </Affix>
    )
}

export default RightAside;