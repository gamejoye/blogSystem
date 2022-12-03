import { Button, Comment, Divider, Form, Input, message } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { postInstance, getInstance } from '../../utils/apis/axios/axiosConfig';
import { useSelector } from 'react-redux';
import './index.css'
import { selectName } from '../../redux/selectors/userInfoSelector';

const { TextArea } = Input;


const CommentList = ({ comments }) => {
    const list = comments.map((comment, index) => {
        return (
            <React.Fragment key={index}>
                <Comment
                    content={comment.content}
                    author={comment.name}
                    datetime={comment.commentDay}
                    avatar={<UserOutlined />}
                />
                <Divider />
            </React.Fragment>
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
        <TextArea rows={3} onChange={onChange} value={value} placeholder='留下你的精彩评论吧~' />
        <Button loading={submitting} onClick={onSubmit} type="primary">
            发布
        </Button>
    </>
);

function CommentBox({title}) {
    const username = useSelector(selectName);
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleCommit = () => {
        postInstance.post('comments' + '/commit', {
            username: username,
            title: title,
            commentDay: moment().format('YYYY-MM-DD'),
            content: value
        })
    }

    useEffect(() => {
        getInstance.get('comments/all', {
            params: {
                username: username,
                title: title
            }
        }).then(
            (res) => {
                setComments(res.data);
            }
        )
    }, [username]);

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
                    content: <p>{value}</p>,
                    commentDay: moment().format('YYYY-MM-DD')
                },
            ]);
            message.success('评论成功!', 1);
        }, 1000);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="comments">
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
        </div>
    )
}

export default CommentBox;