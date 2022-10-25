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

export const insertHandle = (dom, value, range) => {
    if(typeof value !== "string") {
        range.insertNode(value);
        return;
    }
    if(range.startContainer.nodeName !== "#text") {
        let node = document.createTextNode(value);
        range.startContainer.appendChild(node);
        range.setStart(node, node.length);
        range.collapse(true);
        return;
    }
    let offset = range.startOffset;
    let container = range.startContainer;
    container.insertData(offset, value);
    range.setStart(container, offset + value.length);
    range.collapse(true);
}

export const handleRemovePrompt = () => {
    document.getElementById("root").style.filter = 'brightness(1)';
    document.getElementById("prompt").style.display = 'none';
}