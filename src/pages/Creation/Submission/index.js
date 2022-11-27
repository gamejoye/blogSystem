import React from "react";
import { Col, Button } from "antd";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectName } from "../../../redux/selectors";
function Submisson(props) {
    const username = useSelector(selectName);
    const navigate = useNavigate();
    function handleSubmit() {
        props.formData.append('content', props.articleContent);
        postInstance.post('files/blogs/images/upload', props.formData).then(
            (res) => {
                postInstance.post('blogs/' + 'addition', {
                    username: username,
                    title: props.title,
                    content: res.data,
                    order: props.order,
                    tags: JSON.stringify(props.tags)
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
export default Submisson;