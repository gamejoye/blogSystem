import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { postInstance, getInstance } from '../../utils/apis/axiosConfig';
import { getCookie } from '../../utils/apis/getCookie';
import { baseUrl } from '../../constant';
const { TextArea } = Input;


const CommentList = ({ comments }) => {
    const list = comments.map((comment, index) => {
        console.log(comment);
        return (
            <Comment
                key={index}
                content={comment.content}
                author={comment.name}
                datetime={comment.commentDay}
                avatar={<UserOutlined/>}
            />
        )
    })
    return (
        <>
            {list}
        </>
    )
}

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

function CommentBox(props) {
    const title = props.title;
    const username = getCookie("username");
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleCommit = () => {
        postInstance.post(baseUrl + 'comments' + '/commit', {
            username: username,
            title: title,
            commentDay: moment().format('YYYY-MM-DD'),
            content: value
        })
    }

    useEffect(() => {
        getInstance.get(baseUrl + 'comments' + '/all', {
            params: {
                username: username,
                title: title
            }
        }).then(
            (res) => {
                setComments(res.data);
            }
        )
    }, [1]);

    const handleSubmit = () => {
        if (!value) return;
        handleCommit();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    name: username,
                    avatar: <UserOutlined />,
                    content: <p>{value}</p>,
                    commentDay: moment().format('YYYY-MM-DD')
                },
            ]);
        }, 1000);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <Comment
                avatar={<UserOutlined />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
            {comments.length > 0 && <CommentList comments={comments} />}
        </>
    )
}

export default CommentBox;