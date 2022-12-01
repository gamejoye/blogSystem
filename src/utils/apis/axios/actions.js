import { getInstance, postInstance } from "./axiosConfig"
export const loadBlogs = (name, dispatch, setAllBlogsAction) => {
    getInstance.get('blogs/byName', {
        params: {
            username: name,
        }
    }).then(
        (res) => {
            dispatch(setAllBlogsAction(res.data));
        }
    )
}
export const loadUserInfo = (name, dispatch, setUserInfo) => {
    getInstance.get('user/introduction', {
        params: {
            username: name
        }
    }).then(
        (res) => {
            dispatch(setUserInfo(res.data));
        }
    )
}
export const updateUserInfo = (data) => {
    postInstance.post('user/edit', data).then(
        (res) => {
            
        }
    )
}