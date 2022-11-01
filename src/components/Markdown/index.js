import React from 'react'
import { marked } from 'marked'
import hljs from "highlight.js";
import { transformImg } from '../../utils/apis/transformBlog';
import 'highlight.js/styles/magula.css';
import './index.css'

function Markdown(props) {
    const markdownContent = marked(transformImg(props.content))
    const _className = props._className;
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    })
    return (
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} className={_className}></div>
    )
}

export default Markdown;