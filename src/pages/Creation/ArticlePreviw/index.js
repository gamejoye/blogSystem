import React from "react";
import Markdown from "../../../components/Markdown";
import { Col } from "antd";
function ArticlePreview(props) {
    return (
        <>
            <Col span={14} offset={4}>
                <br />
                <Markdown content={props.articlePreview} _className="content"></Markdown>
            </Col>
        </>
    )
}

export default ArticlePreview;