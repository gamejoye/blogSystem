import React from "react";
import { markdownInsert } from "../../../constant";
import { Col } from "antd";
import './index.css'
function Edit(props) {
    //设置tab缩进
    let move = false;
    function handleKeyDown(e) {
        let dom = e.target;
        //keydown是tab键
        if (e.keyCode == 9) {
            e.preventDefault();
            let lastRange = props.lastRange;
            if(!lastRange) return;
            markdownInsert(dom, "\xa0\xa0\xa0\xa0", lastRange);
        } else {
            props.setLastRange(document.getSelection().getRangeAt(0));
        }
    }
    function handleHeadOnInput(e) {
        props.setTitle(e.target.innerText)
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
                <div
                    contentEditable={true}
                    className="blog-head blog-text"
                    rows={1}
                    onInput={(e) => handleHeadOnInput(e)}
                />
            </Col>
            <Col span={14} offset={4}>
                <br />
                <div
                    contentEditable={true}
                    id="creationContent"
                    className="blog-content blog-text"
                    rows={35}
                    onClick={(e) => handleOnClick(e)}
                    onInput={(e) => handleContentOnInput(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </Col>
        </>
    )
}

export default Edit