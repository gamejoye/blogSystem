import React from "react";
import { strSplit } from "../../../constant";
function Toolbar(props) {
    function handleOnclick() {
        let dom = document.getElementById("creationContent");
        let { prefix, suffix } = strSplit(dom);
        dom.value = prefix + "\n```\n\n```\n" + suffix;
    }
    function handleSetEdit() {
        props.setEdit(!props.edit);
    }
    return (
        <ul>
            <li onClick={() => handleOnclick()}>代码块</li>
            <li onClick={() =>handleSetEdit()}>预览</li>
        </ul>
    )
}
export default Toolbar;