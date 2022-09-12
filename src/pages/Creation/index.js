import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { postInstance } from "../../utils/apis/axiosConfig";
import { username } from "../../constant";
import TextArea from "antd/lib/input/TextArea";
import { Button, Col, Row } from "antd";
import './index.css'

function Creation(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [order, setOrder] = useState(1);

    //设置tab缩进
    function handleKeyDown(e){
        let sta = e.target.selectionStart;
        let end = e.target.selectionEnd;
        let prefix = e.target.value.substr(0,sta);
        let suffix = e.target.value.substr(end);
        console.log(e);
        //keydown是tab键
        if(e.keyCode == 9){
            e.preventDefault();
            let c = prefix+"    "+suffix;
            e.target.value = c;
            e.target.setSelectionRange(sta+4,sta+4);
        }
    }

    function handleSubmit() {
        postInstance.post('blogs/' + 'addition', {
            username: username,
            title: title,
            content: content,
            order: order
        }).then(
            (res) => {
                if (res.data === 'successfully added') {
                    navigate('/home');
                } else {
                    alert('This blog already exists, please change it to a new blog name');
                }
            }
        )
    }
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={14} offset={4}>
                    <br />
                    <TextArea
                        className="head"
                        rows={1}
                        placeholder="文章标题~"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Col>
                <Col span={14} offset={4}>
                    <br />
                    <TextArea
                        className="text"
                        rows={35}
                        placeholder="文章内容~"
                        onChange={(e) => setContent(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                </Col>
                <Col span={4} offset={10}>
                    <Button type="primary" onClick={() => handleSubmit()}>发布博客</Button>
                </Col>
            </Row>
        </div>
    )
}

export default (Creation)