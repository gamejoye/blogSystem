import React, { useState } from "react";
import { Col, Button } from "antd";
import { postInstance } from "../../../utils/apis/axios/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectName } from "../../../redux/selectors/userInfoSelector";
import { addBlog } from "../../../redux/reducers/blogsReducer";
function Submisson({ tags, title, order, formData, articleContent }) {
    const username = useSelector(selectName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [obj] = useState({});
    const blog = {
        username: username,
        title: title,
        order: order,
    }
    function handleSubmit() {
        formData.append('content', articleContent);
        postInstance.post('files/blogs/images/upload', formData).then(
            (res) => {
                obj.content = res.data;
                postInstance.post('blogs/' + 'addition', {
                    ...blog,
                    content: res.data,
                    tags: JSON.stringify(tags)
                }).then(
                    (res) => {
                        if (res.data === 'successfully added') {
                            dispatch(addBlog({
                                ...blog,
                                content: obj.content,
                                tags
                            }));
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