import React, { useEffect } from "react";
import { useState } from "react";
import { Row } from "antd";
import Toolbar from "./Toolbar";
import Edit from "./Edit";
import ArticlePreview from "./ArticlePreviw";
import Submisson from "./Submission";
import './index.css'

function Creation(props) {
    const [title, setTitle] = useState('');
    const [articleContent, setContent] = useState('');
    const [articlePreview, setPreview] = useState('');
    const [order, setOrder] = useState(1);
    const [lastRange, setLastRange] = useState(null);
    const [formData] = useState(new FormData());
    return (
        <div className="creation">
            <Toolbar lastRange={lastRange} formData={formData} setContent={setContent} setPreview={setPreview} />
            <Row gutter={[16, 16]} id="article_edit">
                <Edit setTitle={setTitle} setContent={setContent} setOrder={setOrder} lastRange={lastRange} setLastRange={setLastRange} setPreview={setPreview}  formData={formData} />
            </Row>
            <Row gutter={[16, 16]} id="article_preview">
                <ArticlePreview articlePreview={articlePreview}/>
            </Row>
            <Row gutter={[16, 16]}>
                <Submisson title={title} articleContent={articleContent} order={order} formData={formData}/>
            </Row>
        </div>
    )
}

export default (Creation)