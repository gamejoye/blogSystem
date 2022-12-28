import React, { useEffect } from 'react'
import { marked } from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/magula.css';
import './index.scss'
import thiny from "../../images/bg/bg.png"

function Markdown(props) {
    const markdownContent = marked(props.content)
    const _className = props._className;
    const selectImasHeightAndWidth = (alt) => {
        let index = alt.indexOf('-');
        return {
            width: parseInt(alt.substring(0, index)),
            height: parseInt(alt.substring(index + 1))
        };
    }
    useEffect(() => {
        const render = new marked.Renderer();
        if (props.isPost) render.image = (src, _title, text) => {
            const { width, height } = selectImasHeightAndWidth(text);
            return `<img src=${thiny} 
                data-src=${src} 
                alt=${text} 
                style="aspect-ratio:${width / height}"
                class="img-loading"
            />`
        }
        marked.setOptions({
            renderer: render,
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
    }, []);
    return (
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} className={_className}></div>
    )
}

export default Markdown;