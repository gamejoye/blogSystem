export const transformImg = (blog) => {
    //导入本地图片库
    //后面再找其他方法 这个方法有点呆瓜
    const reqSvgs = require.context('../../../../images/blog', true, /\.(jpe?g|png)$/);
    //![]()
    let regex = /!\[\]\(\.\/[a-z,A-Z,0-9,-]*\.(jpe?g|png)\)/g;
    let arr = blog.match(regex);
    //console.log("博客 : "+blog);
    if(arr != null) {
        arr.forEach((value) => {
            let start = value.indexOf('(')+1;
            let end = value.indexOf(')');
            let url = value.substring(start, end);
            let replacement = reqSvgs(url);
            blog = blog.replace(url, replacement);
        })
    }
    return blog;
}