import React from "react";
import { useState } from "react";
import { Divider, Row } from "antd";
import Toolbar from "./Toolbar";
import Edit from "./Edit";
import ArticlePreview from "./ArticlePreviw";
import Submisson from "./Submission";
import './index.css'

function Creation(props) {
    const [title, setTitle] = useState('');
    const [articleContent, setContent] = useState('');
    const [order, setOrder] = useState(1);
    return (
        <div>
            <Toolbar/>
            <Row gutter={[16, 16]} id="article_edit">
                <Edit setTitle={setTitle} setContent={setContent} setOrder={setOrder} />
            </Row>
            <Row gutter={[16, 16]} id="article_preview">
                <ArticlePreview articleContent={articleContent} />
            </Row>
            <Row gutter={[16, 16]}>
                <Submisson title={title} articleContent={articleContent} order={order} />
            </Row>
        </div>
    )
}

export default (Creation)