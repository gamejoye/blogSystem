export const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:8080/MyBlog/" : "http://112.74.55.177/Blog/";

export const markdownInsert = (dom, value, range, setPreviewCallback, setContentCallback) => {
    if (value === "\xa0\xa0\xa0\xa0") {
        range.deleteContents();
        let offset = range.startOffset;
        let container = range.startContainer;

        if(container.nodeName === 'DIV') {
            //div 节点
            container.textContent = value;
            container = container.childNodes[0];
        } else {
            //#text 节点
            container.insertData(offset, value);
        }
        range.setStart(container, offset + value.length);
        range.collapse(true);
        setPreviewCallback(dom.innerText);
        return;
    }
    range.insertNode(document.createElement('div'));
    if (typeof value !== "string") {
        range.insertNode(value);
    } else {
        if (value === "``` ```") {
            let _div1 = document.createElement('div');
            _div1.textContent = "```";
            let _div2 = document.createElement('div');
            _div2.textContent = "code block";
            let _div3 = document.createElement('div');
            _div3.textContent = "```";
            range.insertNode(_div1);
            range.insertNode(_div2);
            range.insertNode(_div3);
        } else {
            let _div1 = document.createElement('div');
            _div1.textContent = value;
            range.insertNode(_div1);
        }
    }
    setPreviewCallback(dom.innerText);
    setContentCallback(dom.innerHTML);
}

export const handleRemovePrompt = (dom) => {
    document.getElementById("root").style.filter = 'brightness(1)';
    dom.style.display = 'none';
}
