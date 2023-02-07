import { Comment, message } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import './index.scss'
import { selectName } from '../../redux/selectors/userInfoSelector';
import { IComment } from "../../types";
import Editor from './Editor';
import CommentList from './CommentList';
import { commitComment, getAllComments } from '../../utils/apis/axios/api';

interface IProps {
    blogId: number;
}

function CommentBox({ blogId }: IProps) {
    const name = useSelector(selectName);
    const [comments, setComments] = useState([] as IComment[]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleCommit = () => {
        commitComment({
            name,
            blogId,
            commentDay: moment().format('YYYY-MM-DD'),
            content: value
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const allComments = (await getAllComments(
                name,
                blogId
            )).data;
            setComments(allComments);
        }
        fetchData();
    }, [name]);

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
                    name,
                    blogId,
                    content: <p>{value}</p>,
                    commentDay: moment().format('YYYY-MM-DD')
                },
            ]);
            message.success('评论成功!', 1);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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