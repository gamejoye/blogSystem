import React, { useEffect, useState } from 'react';
import './index.scss'
import { IComment } from "../../types";
import CommentList from './CommentList';
import { getAllComments } from '../../utils/apis/axios/api';

interface IProps {
    blogId: number;
}
function CommentBox({ blogId }: IProps) {
    const [comments, setComments] = useState([] as IComment[]);
    useEffect(() => {
        const fetchData = async () => {
            const allComments = (await getAllComments(
                blogId
            )).data;
            setComments(allComments);
        }
        fetchData();
    }, []);

    return (
        <div className="comments">
            {<CommentList comments={comments} />}
        </div>
    )
}

export default CommentBox;