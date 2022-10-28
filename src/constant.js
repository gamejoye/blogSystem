//export const BASE_URL = 'http://112.74.55.177/Blog/';
export const BASE_URL = 'http://localhost:8080/MyBlog/';
export const USER = {
    name: 'gamejoye'
};

export const map = {
    '主页': 'home',
    '文章': 'titles',
    '个人资料': 'about',
    '发文章': 'creation',
}

export const markdownInsert = (dom, value, range, setPreviewCallback, setContentCallback) => {
    if (value === "\xa0\xa0\xa0\xa0") {
        range.deleteContents();
        let offset = range.startOffset;
        let container = range.startContainer;
        container.insertData(offset, value);
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
            _div1.innerText = "```";
            let _div2 = document.createElement('div');
            _div2.innerText = "code block";
            let _div3 = document.createElement('div');
            _div3.innerText = "```";
            range.insertNode(_div1);
            range.insertNode(_div2);
            range.insertNode(_div3);
        } else {
            let _div1 = document.createElement('div');
            _div1.innerText = value;
            range.insertNode(_div1);
        }
    }
    setPreviewCallback(dom.innerText);
    setContentCallback(dom.innerHTML);
}

export const handleRemovePrompt = () => {
    document.getElementById("root").style.filter = 'brightness(1)';
    document.getElementById("prompt").style.display = 'none';
}