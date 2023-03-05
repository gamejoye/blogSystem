import React from "react";
import { Comment } from "antd";
import { IComment } from "../../types";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";

interface IProps {
    comments: IComment[]
}

const CommentList = ({ comments }: IProps) => {
    const userInfo = useSelector(selectUserInfo);
    const list = comments.map((comment, index) => {
        return (
            <React.Fragment key={index}>
                <Comment
                    content={comment.content}
                    author={comment.name}
                    datetime={comment.commentDay}
                    avatar={<img src={userInfo.avatarUrl} />}
                />
            </React.Fragment>
        )
    })
    return (
        <>
            {list}
        </>
    )
}

export default CommentList;