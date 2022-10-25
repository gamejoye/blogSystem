import React from "react";
import { insertHandle } from "../../../constant";
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
            insertHandle(dom, "\xa0\xa0\xa0\xa0", lastRange);
        } else {
            props.setLastRange(document.getSelection().getRangeAt(0));
        }
    }
    function handleOnInput(e) {
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
                    onInput={(e) => props.setTitle(e.target.innerText)}
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
                    onInput={(e) => handleOnInput(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </Col>
        </>
    )
}

export default Edit