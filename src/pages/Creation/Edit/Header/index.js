import React from "react";
import { Col } from "antd";
import '../index.scss';
function CreationHeader({checkInput, handleOnKeyDown}) {
    return (
        <>
            <Col span={14} offset={4}>
                <br />
                <p className="warn"><b>WARN！！！</b>(标题最多25个字符)</p>
                <div
                    contentEditable={true}
                    className="blog-head blog-text"
                    rows={1}
                    onInput={checkInput}
                    onKeyDown={handleOnKeyDown}
                />
            </Col>
        </>
    )
}
export default CreationHeader;