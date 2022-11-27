import React from "react";
import './index.css'
function Tag({ idx, blogs, setBlogs, children }) {
    const renderBlogs = () => {
        const filterBlogs = blogs.filter(blog => {
            return blog.tags && blog.tags.includes(children);
        });
        setBlogs(filterBlogs);
    }
    return (
        <span className="class-tag" key={idx} onClick={renderBlogs}>
            {children}
        </span>
    )
}
function Classification({tags, blogs, setBlogs }) {
    return (
        <div className="classification">
            {(tags.length == 0 && <div className="classification-empty">
                在您发布或删除博客后 这里会自动更新
            </div>) || tags.map((tag, idx) => {
                return (
                    <Tag key={idx} idx={idx} setBlogs={setBlogs} blogs={blogs}>
                        {tag}
                    </Tag>
                )
            })}
        </div>
    )
}
export default React.memo(Classification);