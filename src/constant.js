export const BASE_URL = 'http://localhost:8080/MyBlog/';
export const username = 'gamejoye';

export const map = {
    '主页': 'home',
    '文章': 'titles',
    '个人资料': 'about',
    '发文章': 'creation',
}

//用于Creation的TextareaDom 获取光标前的字符和光标后的字符串
export const strSplit = (dom) => {
    let value = dom.value;
    let sta = dom.selectionStart;
    let end = dom.selectionEnd;
    let prefix = value.substr(0, sta);
    let suffix = value.substr(end);
    return {
        prefix : prefix,
        suffix : suffix,
        sta : sta
    }
}