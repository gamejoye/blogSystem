import React, { useEffect, useLayoutEffect, useState } from 'react'
import { marked } from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/magula.css';
import './index.scss'
import thiny from "../../images/bg/bg.png"

const selectImasHeightAndWidth = (alt) => {
    let index = alt.indexOf('-');
    return {
        width: parseInt(alt.substring(0, index)),
        height: parseInt(alt.substring(index + 1))
    };
}
function Markdown({ content, className, isPreview }) {
    const markdownContent = marked(content)
    const render = new marked.Renderer();
    //class=${post ? "img-loading" : "img-loaded"}
    render.image = (src, _title, text) => {
        const { width, height } = selectImasHeightAndWidth(text);
        return `<img 
            src=${isPreview ? src : thiny}
            data-src=${src}
            alt=${text}
            style="aspect-ratio:${width / height}"
            class=${isPreview ? "img-loaded" : "img-loading"}
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
    });

    return (
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} className={className}></div>
    )
}
export default React.memo(Markdown);