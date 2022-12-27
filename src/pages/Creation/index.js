import React, { lazy } from "react";
import { useState } from "react";
import { Row } from "antd";
import Tags from "./Tags";

const Toolbar = lazy(() => import('./Toolbar'));
const Edit = lazy(() => import('./Edit'));
const ArticlePreview = lazy(() => import('./ArticlePreviw'));
const Submission = lazy(() => import('./Submission'));

function Creation(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEdit, setIsEdit] = useState(true);
    const [order, setOrder] = useState(1);
    const [tags] = useState([]);
    const [lastRange, setLastRange] = useState(null);
    const [formData] = useState(new FormData());
    return (
        <div className="creation">
            <Toolbar
                lastRange={lastRange}
                formData={formData}
                setContent={setContent}
                setIsEdit={setIsEdit}
            />
            {isEdit && (<>
                <Row gutter={[16, 16]}>
                    <Edit
                        setTitle={setTitle}
                        setOrder={setOrder}
                        setContent={setContent}
                        lastRange={lastRange}
                        setLastRange={setLastRange}
                        formData={formData}
                    />
                </Row>
                <Row>
                    <Tags
                        tags={tags}
                    />
                </Row>
            </>) || (<Row gutter={[16, 16]}>
                <ArticlePreview
                    title={title}
                    content={content}
                />
            </Row>)}
            <Row gutter={[16, 16]}>
                <Submission
                    title={title}
                    order={order}
                    tags={tags}
                    formData={formData}
                />
            </Row>
        </div>
    )
}

export default (Creation)