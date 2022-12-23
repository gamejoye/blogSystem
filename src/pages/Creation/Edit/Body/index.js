import React from "react";
import { Col } from "antd";
import '../index.scss';
function CreationBody({handleKeyUp, handleOnInput, handleOnClick}) {
    return(
        <>
            <Col span={14} offset={4}>
                <p className="warn"><b>WARN！！！</b>(请注意插入图片时，光标应该在一行空行上)</p>
                <div
                    contentEditable={true}
                    id="creationContent"
                    className="blog-content blog-text"
                    rows={35}
                    onClick={handleOnClick}
                    onInput={handleOnInput}
                    onKeyUp={handleKeyUp}
                />
            </Col>
        </>
    )
}
export default CreationBody;