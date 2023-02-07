import React from "react";
import { Divider } from "antd";
import { IBlog } from "../../types";

interface IProps {
    handleOnClick: (blog: IBlog) => void;
    blogs: IBlog[];
}

function TitleList({ handleOnClick, blogs }: IProps) {
    const titleItems = blogs.map((blog) => {
        return (
            <div key={blog.id} onClick={() => handleOnClick(blog)}>
                <Divider />
                <p>{blog.title}</p>
            </div>
        )
    })
    return (
        <div>
            {titleItems}
        </div>
    )
}

export default TitleList;