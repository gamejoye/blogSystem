import React, { useState } from 'react'
import { marked } from 'marked'
import hljs from "highlight.js";
//import 'highlight.js/styles/github.css';
//import 'highlight.js/styles/monokai-sublime.css';
import 'highlight.js/styles/atom-one-dark.css';
import './index.css'
import { transformImg } from '../../utils/apis/transformBlog';

function Markdown(props) {
    const [markdownContent, setMarkdownContent] = useState(marked(transformImg(props.content)));
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