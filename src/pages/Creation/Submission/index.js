import React from "react";
import { Col, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectName } from "../../../redux/selectors/userInfoSelector";
import { addBlog } from "../../../redux/reducers/blogsReducer";
function Submisson({ tags, title, order, formData, articleContent }) {
    const username = useSelector(selectName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blog = {
        username: username,
        title: title,
        order: order,
        tags: JSON.stringify(tags),
        //content: 在服务端格式转换后会添加进来
    }
    const handleSubmit = async () => {
        formData.append('content', articleContent);
        const ok = await dispatch(addBlog({formData, blog})).unwrap();
        if(ok !== "failed") {
            message.success('博客上传成功', 1);
            navigate('/');
        } else {
            message.error('博客上传发生错误', 1);
        }
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