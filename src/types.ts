interface IBlog {
    id: number;
    ordered: number; // 设置博客的优先级可用
    name: string;
    title: string;
    content: string;
    tags: string[];
}

interface IUserInfo {
    name: string;
    sex: string;
    address: string;
    birthday: string;
    aboutMe: string;
}

interface ISelectedTags {
    id: string;
    tag: string;
}

interface IComment {
    name: string;
    blogId: number;
    content: string | React.ReactNode;
    commentDay: string;
}

export {
    IBlog,
    IUserInfo,
    ISelectedTags,
    IComment
}