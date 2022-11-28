import React from "react";
import { markdownInsert } from "../../../utils/actions";
import { CODE_BLOCK, FIRST_HEADER, SECOND_HEADER, THIRD_HEADER, EDIT, PREVIEW, IMAGE } from './constant'
import './index.css'
function Toolbar(props) {
    let move = false;
    function handleInsertData(type) {
        let value;
        switch (type) {
            case CODE_BLOCK:
                { value = "``` ```"; break; }
            case FIRST_HEADER:
                { value = "#\xa0"; break; }
            case SECOND_HEADER:
                { value = "##\xa0"; break; }
            case THIRD_HEADER:
                { value = "###\xa0"; break }
            default:
                value = "";
        };
        let lastRange = props.lastRange;
        if (!lastRange || !value) return;
        let dom = document.getElementById("creationContent");
        markdownInsert(dom, value, lastRange, props.setPreview, props.setContent);
    }

    function handleInsertDom(type) {
        if (type === IMAGE) {
            let lastRange = props.lastRange;
            if (!lastRange) return;
            let file = document.getElementById("img-upload").files[0];
            let url = window.URL.createObjectURL(file);
            let image = document.createElement("img");
            image.src = url;
            lastRange.insertNode(image);
            props.formData.append(url, file);
        }
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
            <li className="secondary_base"><a onClick={() => handleInsertData(CODE_BLOCK)}>代码块</a></li>
            <li className="secondary_base"><a onClick={() => handleInsertData(FIRST_HEADER)}>一级标题</a></li>
            <li className="secondary_base"><a onClick={() => handleInsertData(SECOND_HEADER)}>二级标题</a></li>
            <li className="secondary_base"><a onClick={() => handleInsertData(THIRD_HEADER)}>三级标题</a></li>
            <li className="secondary_base">
                <label htmlFor="img-upload" className="image-upload">上传图片</label>
                <input id="img-upload" type="file"></input>
            </li>
            <li className="secondary_base"><a onClick={() => handleInsertDom(IMAGE)}>确认</a></li>
        </ul>
    )
}
export default Toolbar;