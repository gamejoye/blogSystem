import React, { useState } from "react";
import { Col } from "antd";
import './index.css'
function Tags({ tags }) {
    const move = (container, keyCode, offset) => {
        if (keyCode === 38) return false;
        if (keyCode === 37) {
            if (container.nodeName !== '#text' || offset === 0) return false;
        }
        return true;
    }
    const deleteTag = (container, offset) => {
        if(offset < -1) return;
        let idx = -1;
        if (container.nodeName !== '#text') {
            idx = tags.indexOf(container.childNodes[offset-1].textContent);
            if(idx !== -1) tags.splice(idx, 1);
        }
    }
    const handleOnKeyDown = (e) => {
        const dom = e.currentTarget;
        const nodes = dom.childNodes;
        const range = document.getSelection().getRangeAt(0);
        if (e.keyCode === 8) {
            deleteTag(range.startContainer, range.startOffset);
        } else if (tags.length >= 5 || !move(range.startContainer, e.keyCode, range.startOffset)) {
            e.preventDefault();
            return;
        }
        if (e.keyCode === 32 || e.keyCode == 13 || e.keyCode == 9) {
            e.preventDefault();
            const span = document.createElement('span');
            span.className = 'tag';
            span.contentEditable = false;
            nodes.forEach(node => {
                if (node.nodeName === '#text') {
                    span.textContent = node.nodeValue;
                    dom.removeChild(node);
                }
            });
            if (span.textContent) {
                range.insertNode(span);
                range.setStart(dom, nodes.length);
                tags.push(span.textContent);
            }
        }
    }
    return (
        <>
            <Col span={14} offset={4}>
                <div className="tags-container">
                    <p><b>标签：</b>(最多添加5个标签 编辑好一个按下回车、空格、TAB键其中一个后编辑下一个)</p>
                    <div
                        contentEditable={true}
                        onKeyDown={(e) => handleOnKeyDown(e)}
                    />
                </div>
            </Col>
        </>
    )
}
export default Tags;