import React from "react";
import CreationHeader from "./Header";
import CreationBody from "./Body";
import './index.scss'
function Edit({ setLastRange, setPreview, setTitle }) {
    const handleContentKeyUp = () => {
        setLastRange(document.getSelection().getRangeAt(0));
    }
    //检查标题长度合法性
    const handleHeadOnKeyDown = (e) => {
        const innerText = e.target.innerText;
        if (innerText.length >= 25 && e.keyCode != 8) {
            e.preventDefault();
            return;
        }
        setTitle(e.target.innerText);
    }
    //防止复制粘贴导致超出标题长度限制
    const checkHeaderInput = (e) => {
        const innerText = e.target.innerText;
        if (innerText.length > 25) {
            e.target.innerText = innerText.substring(0, 25);
        }
    }
    const handleContentOnInput = (e) => {
        setPreview(e.target.innerText);
    }
    const handleContentOnClick = () => {
        setLastRange(document.getSelection().getRangeAt(0));
    }
    return (
        <>
            <CreationHeader
                checkInput={checkHeaderInput}
                handleOnKeyDown={handleHeadOnKeyDown}
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