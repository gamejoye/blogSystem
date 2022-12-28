import React from "react";
import Markdown from "../../../components/Markdown";
import { Col } from "antd";
function ArticlePreview({title, content}) {
    return (
        <>
            <Col span={14} offset={4}>
                <Markdown content={title} className="header"></Markdown>
                <br />
                <Markdown content={content} className="content" isPreview={true}></Markdown>
            </Col>
        </>
    )
}

export default ArticlePreview;