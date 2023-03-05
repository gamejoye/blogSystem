import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.scss'
import { selectName } from '../../redux/selectors/userInfoSelector';
import { IComment } from "../../types";
import CommentList from './CommentList';
import { getAllComments } from '../../utils/apis/axios/api';

interface IProps {
    blogId: number;
}

function CommentBox({ blogId }: IProps) {
    const name = useSelector(selectName);
    const [comments, setComments] = useState([] as IComment[]);

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

    return (
        <div className="comments">
            {<CommentList comments={comments} />}
        </div>
    )
}

export default CommentBox;