import { getInstance, postInstance, putInstance } from "./config";
import { IBlog, IComment, IUserInfo } from "../../../types";
export const getAllBlogs = (name: string) => {
    return getInstance.get(`blog/name/gamejoye`);
}
export const getUserInfo = (name: string) => {
    return getInstance.get('user/introduction/gamejoye');
};
export const getAllComments = (name: string, blogId: number) => {
    return getInstance.get(`blog/${blogId}/comment`)
}
export const postBlog = (formData: FormData, blog: IBlog) => {
    return postInstance.post('files/images', formData)
        .then(res => res.data)
        .then(content => {
            return postInstance.post('blog', {...blog, content});
        });
}
export const updateUserInfo = (data: IUserInfo) => {
    return putInstance.put('user/introduction/gamejoye', data);
}
export const commitComment = (commet: IComment) => {
    return postInstance.post(`blog/${commet.blogId}/comment`, commet);
}