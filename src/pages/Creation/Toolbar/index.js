import React from "react";
import { EDIT, PREVIEW } from './constant'
import './index.scss'
function Toolbar({lastRange, formData, setIsEdit}) {
    const insertDOM = type => text => () => {
        if (!lastRange) return;
        const el = document.createElement(type);
        if (type === 'div') {
            el.textContent = text;
        } else if (type === 'img') {
            el.src = text;
        }
        lastRange.insertNode(el);
    }
    const insertDIV = insertDOM('div');
    const insertIMG = insertDOM('img');
    function handleInsertIMG() {
        if (!lastRange) return;
        let file = document.getElementById("img-upload").files[0];
        let url = window.URL.createObjectURL(file);
        formData.append(url, file);
        insertIMG(url)();
    }
    function handleSetEdit(type) {
        setIsEdit(type !== PREVIEW);
    }
    return (
        <ul className="secondary_menu">
            <li className="secondary_base"><a onClick={() => handleSetEdit(PREVIEW)}>预览</a></li>
            <li className="secondary_base"><a onClick={() => handleSetEdit(EDIT)}>编辑</a></li>
            <li className="secondary_base"><a onClick={() => { insertDIV("```")(); insertDIV("code block")(); insertDIV("```")() }}>代码块</a></li>
            <li className="secondary_base"><a onClick={insertDIV("# ")}>一级标题</a></li>
            <li className="secondary_base"><a onClick={insertDIV("## ")}>二级标题</a></li>
            <li className="secondary_base"><a onClick={insertDIV("### ")}>三级标题</a></li>
            <li className="secondary_base">
                <label htmlFor="img-upload" className="image-upload">上传图片</label>
                <input id="img-upload" type="file"></input>
            </li>
            <li className="secondary_base"><a onClick={handleInsertIMG}>确认</a></li>
        </ul>
    )
}
export default Toolbar;