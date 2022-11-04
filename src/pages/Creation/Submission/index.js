import React from "react";
import { Col, Button } from "antd";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { transformImg } from "../../../utils/apis/transformBlog";
function Submisson(props) {
    const username = props.name
    const navigate = useNavigate();
    function handleSubmit() {
        props.formData.append('content', props.articleContent);
        postInstance.post('files/blogs/images/upload', props.formData).then(
            (res) => {
                postInstance.post('blogs/' + 'addition', {
                    username: username,
                    title: props.title,
                    content: res.data,
                    order: props.order
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
        )
    }
    return (
        <>
            <Col span={4} offset={10}>
                <Button type="primary" onClick={() => handleSubmit()}>发布博客</Button>
            </Col>
        </>
    )
}
export default connect(
    (state) => ({
        name: state.name
    })
)(Submisson);