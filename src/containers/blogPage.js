import React from 'react';
import { useLocation } from 'react-router-dom'

function BlogBody(props) {

    const blog = useLocation().state.blog

    return <div>
        <h1>{blog.article_name}</h1>
        <h3><b>作者:</b>{blog.username}</h3>
        <p><b>内容:</b>{blog.content}</p>
        <br/><br/><br/>
        <a href='/homepage' style={{textDecoration:'none'}}>返回主页</a>
    </div>
}
export default BlogBody
