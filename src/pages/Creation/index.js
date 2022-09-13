import React from "react";
import { useState } from "react"
import { Row } from "antd";
import Toolbar from "./Toolbar";
import Edit from "./Edit";
import ArticlePreview from "./ArticlePreviw";
import Submisson from "./Submission";
import './index.css'

function Creation(props) {
    const [title, setTitle] = useState('');
    const [articleContent, setContent] = useState('');
    const [order, setOrder] = useState(1);
    const [edit, setEdit] = useState(true);
    return (
        <div>
            <Toolbar edit={edit} setEdit={setEdit}/>
            <Row gutter={[16, 16]}>
                {(edit && <Edit
                    setTitle={setTitle}
                    setContent={setContent}
                    setOrder={setOrder} />)
                    || <ArticlePreview
                        articleContent={articleContent} />
                }
                <Submisson title={title} articleContent={articleContent} order={order} />
            </Row>
        </div>
    )
}

export default (Creation)