import React from "react";
import { Col, Button } from "antd";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
function Submisson(props) {
    const username = props.name
    const navigate = useNavigate();
    function handleSubmit() {
        /*
        postInstance.post('blogs/' + 'addition', {
            username: username,
            title: props.title,
            content: props.articleContent,
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
        */
       props.formData.append('content', props.articleContent);
       console.log(props.articleContent);
       postInstance.post('blogs/images/upload',props.formData).then(
            (res) => {
                console.log(props);
                postInstance.post('blogs/' + 'addition', {
                    username: username,
                    title: props.title,
                    content: res.data,
                    order: props.order
                }).then(
                    (res) => {
                        console.log(res.data);
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