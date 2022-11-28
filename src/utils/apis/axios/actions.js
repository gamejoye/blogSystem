import { getInstance } from "./axiosConfig"
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