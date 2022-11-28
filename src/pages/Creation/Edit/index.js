import React, { useState } from "react";
import { markdownInsert } from "../../../utils/actions";
import { Col } from "antd";
import './index.css'
function Edit(props) {
    //设置tab缩进
    function handleKeyDown(e) {
        let dom = e.target;
        //keydown是tab键
        if (e.keyCode == 9) {
            e.preventDefault();
            let lastRange = props.lastRange;
            if(!lastRange) return;
            markdownInsert(dom, "\xa0\xa0\xa0\xa0", lastRange, props.setPreview);
        }
    }
    function handleKeyUp(e) {
        props.setLastRange(document.getSelection().getRangeAt(0));
    }
    //检查标题长度合法性
    function handleHeadOnKeyDown(e) {
        const innerText = e.target.innerText;
        if(innerText.length >= 25 && e.keyCode != 8) {
            e.preventDefault();
            return;
        }
        props.setTitle(e.target.innerText);
    }
    //防止复制粘贴导致超出标题长度限制
    function checkInput(e) {
        const innerText = e.target.innerText;
        if(innerText.length > 25) {
            e.target.innerText = innerText.substring(0, 25);
        }
    }
    function handleContentOnInput(e) {
        props.setPreview(e.target.innerText);
        props.setContent(e.target.innerHTML);
    }
    function handleOnClick(e) {
        props.setLastRange(document.getSelection().getRangeAt(0));
    }
    return (
        <>
            <Col span={14} offset={4}>
                <br />
                <p className="warn"><b>WARN！！！</b>(标题最多25个字符)</p>
                <div
                    contentEditable={true}
                    className="blog-head blog-text"
                    rows={1}
                    onInput={(e) => checkInput(e)}
                    onKeyDown={(e) => handleHeadOnKeyDown(e)}
                />
            </Col>
            <Col span={14} offset={4}>
                <p className="warn"><b>WARN！！！</b>(请注意插入图片时，光标应该在一行空行上)</p>
                <div
                    contentEditable={true}
                    id="creationContent"
                    className="blog-content blog-text"
                    rows={35}
                    onClick={(e) => handleOnClick(e)}
                    onInput={(e) => handleContentOnInput(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onKeyUp={(e) => handleKeyUp(e)}
                />
            </Col>
        </>
    )
}

export default Edit