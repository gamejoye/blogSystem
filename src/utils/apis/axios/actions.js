import { getInstance, postInstance } from "./axiosConfig"
export const getAllBlogs = (url, name) => {
    return getInstance.get(url, {
        params: {
            username: name
        }
    });
}
export const getUserInfo = (url, name) => {
    return getInstance.get(url, {
        params: {
            username: name
        }
    })
};
export const updateUserInfo = (data) => {
    postInstance.post('user/edit', data).then(
        (res) => {
            
        }
    )
}