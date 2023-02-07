import React from "react";
import { Comment, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IComment } from "../../types";

interface IProps {
    comments: IComment[]
}

const CommentList = ({ comments }: IProps) => {
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

export default CommentList;