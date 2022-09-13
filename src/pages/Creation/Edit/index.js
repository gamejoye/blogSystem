import React from "react";
import { strSplit } from "../../../constant";
import TextArea from "antd/lib/input/TextArea";
import { Col } from "antd";
import './index.css'
function Edit(props) {
    //设置tab缩进
    function handleKeyDown(e) {
        let dom = e.target;
        let { sta, prefix, suffix } = strSplit(dom);
        //keydown是tab键
        if (e.keyCode == 9) {
            e.preventDefault();
            let c = prefix + "    " + suffix;
            dom.value = c;
            dom.setSelectionRange(sta + 4, sta + 4);
        }
    }
    return (
        <>
            <Col span={14} offset={4}>
                <br />
                <TextArea
                    className="head"
                    rows={1}
                    placeholder="文章标题~"
                    onChange={(e) => props.setTitle(e.target.value)}
                />
            </Col>
            <Col span={14} offset={4}>
                <br />
                <TextArea
                    id="creationContent"
                    className="text"
                    rows={35}
                    placeholder="文章内容~"
                    onChange={(e) => props.setContent(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </Col>
        </>
    )
}

export default Edit