import React, { lazy } from "react";
import { useState } from "react";
import { Row } from "antd";
import './index.css'
import Tags from "./Tags";

const Toolbar = lazy(() => import('./Toolbar'));
const Edit = lazy(() => import('./Edit'));
const ArticlePreview = lazy(() => import('./ArticlePreviw'));
const Submission = lazy(() => import('./Submission'));

function Creation(props) {
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [order, setOrder] = useState(1);
    const [tags] = useState([]);
    const [lastRange, setLastRange] = useState(null);
    const [formData] = useState(new FormData());
    return (
        <div className="creation">
            <Toolbar lastRange={lastRange} formData={formData} setPreview={setPreview} />
            <Row gutter={[16, 16]} id="article_edit">
                <Edit setTitle={setTitle} setOrder={setOrder} lastRange={lastRange} setLastRange={setLastRange} setPreview={setPreview} formData={formData} />
            </Row>
            <Row gutter={[16, 16]} id="article_preview">
                <ArticlePreview preview={preview} />
            </Row>
            <Row>
                <Tags tags={tags} />
            </Row>
            <Row gutter={[16, 16]}>
                <Submission title={title} order={order} tags={tags} formData={formData} />
            </Row>
        </div>
    )
}

export default (Creation)