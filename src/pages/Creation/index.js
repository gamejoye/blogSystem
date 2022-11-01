import React, { lazy, useEffect } from "react";
import { useState } from "react";
import { Row } from "antd";
import './index.css'

const Toolbar = lazy(() => import('./Toolbar'));
const Edit = lazy(() => import('./Edit'));
const ArticlePreview = lazy(() => import('./ArticlePreviw'));
const Submission = lazy(() => import('./Submission'));

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
                <Submission title={title} articleContent={articleContent} order={order} formData={formData}/>
            </Row>
        </div>
    )
}

export default (Creation)