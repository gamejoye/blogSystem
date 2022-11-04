export const transformImg = (blog) => {
    //导入public/media/
    //后面再找其他方法 这个方法有点呆瓜
    //![]()
    let regex = /```\n.*```/g;
    let arr = blog.match(regex);
    console.log("博客 : "+blog);
    if(arr != null) {
        console.log("find")
        arr.forEach((value) => {
            console.log(value)
        })
    }
    return blog;
}