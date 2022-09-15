import React from "react";
import { strSplit } from "../../../constant";
import { CODE_BLOCK, FIRST_HEADER, SECOND_HEADER, THIRD_HEADER, EDIT, PREVIEW } from './constant'
import './index.css'
function Toolbar(props) {
    function handleOnclick(type) {
        //console.log(type);
        let insert;
        switch (type) {
            case CODE_BLOCK:
                { insert = "\n```\n\n```\n"; break; }
            case FIRST_HEADER:
                { insert = "\n# "; break; }
            case SECOND_HEADER:
                { insert = "\n## "; break; }
            case THIRD_HEADER:
                { insert = "\n### "; break }
            default:
                insert = "";
        };
        let dom = document.getElementById("creationContent");
        let { prefix, suffix } = strSplit(dom);
        dom.value = prefix + insert + suffix;
    }
    function handleSetEdit(type) {
        let preview = document.getElementById("article_preview");
        let edit = document.getElementById("article_edit");
        if (type == PREVIEW) {
            preview.style.display = 'block';
            edit.style.display = 'none';
        } else {
            preview.style.display = 'none';
            edit.style.display = 'block';
        }
    }
    return (
        <ul className="secondary_menu">
            <li className="secondary_base"><a onClick={() => handleSetEdit(PREVIEW)}>预览</a></li>
            <li className="secondary_base"><a onClick={() => handleSetEdit(EDIT)}>编辑</a></li>
            <li className="secondary_base"><a onClick={() => handleOnclick(CODE_BLOCK)}>代码块</a></li>
            <li className="secondary_base"><a onClick={() => handleOnclick(FIRST_HEADER)}>一级标题</a></li>
            <li className="secondary_base"><a onClick={() => handleOnclick(SECOND_HEADER)}>二级标题</a></li>
            <li className="secondary_base"><a onClick={() => handleOnclick(THIRD_HEADER)}>三级标题</a></li>
        </ul>
    )
}
export default Toolbar;