import { getInstance, postInstance } from "./config"
export const getAllBlogs = (URL, name) => {
    return getInstance.get(URL, {
        params: {
            username: name
        }
    });
}
export const getUserInfo = (URL, name) => {
    return getInstance.get(URL, {
        params: {
            username: name
        }
    })
};
export const postBlog = (ADD_IMAGE_URL, formData, ADD_BLOG_URL, blog) => {
    return postInstance.post(ADD_IMAGE_URL, formData)
        .then(res => res.data)
        .then(content => {
            blog.content = content;
            return postInstance.post(ADD_BLOG_URL, blog);
        });
}
export const updateUserInfo = (data) => {
    postInstance.post('user/edit', data).then(
        (res) => {

        }
    )
}