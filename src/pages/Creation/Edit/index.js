import React from "react";
import CreationHeader from "./Header";
import CreationBody from "./Body";
import './index.scss'
import { transform } from "../../../utils/actions";
function Edit({ setLastRange, setContent, setTitle }) {
    const handleContentKeyUp = () => {
        setLastRange(document.getSelection().getRangeAt(0));
    }
    //检查标题长度合法性
    const handleHeaderOnKeyDown = (e) => {
        const innerText = e.target.innerText;
        if (innerText.length >= 25 && e.keyCode != 8) {
            e.preventDefault();
            return;
        }
    }
    //防止复制粘贴导致超出标题长度限制
    const handleHeaderOnInput = (e) => {
        const innerText = e.target.innerText;
        if (innerText.length > 25) {
            e.target.innerText = innerText.substring(0, 25);
        }
        setTitle(e.target.innerText);
    }
    const handleContentOnInput = (e) => {
        setContent(transform(document.getElementById("creationContent").childNodes));
    }
    const handleContentOnClick = () => {
        setLastRange(document.getSelection().getRangeAt(0));
    }
    return (
        <>
            <CreationHeader
                handleOnInput={handleHeaderOnInput}
                handleOnKeyDown={handleHeaderOnKeyDown}
            />
            <CreationBody
                handleOnInput={handleContentOnInput}
                handleOnClick={handleContentOnClick}
                handleKeyUp={handleContentKeyUp}
            />
        </>
    )
}

export default Edit