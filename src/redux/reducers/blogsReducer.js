import { createSlice } from "@reduxjs/toolkit";
const options = {
    name: 'blogs',
    initialState: [],
    reducers: {
        setAllBlogs: (state, action) => {
            const { payload } = action;
            payload.forEach(blog => {
                state.push(blog);
            });
        },
        addBlog: (state, action) => {
            const { payload } = action;
            state.push(payload);
        },
        removeBlog: (state, action) => {
            const { payload } = action;
            const idx = state.findIndex(blog => blog.id == payload.id);
            if (idx != -1) {
                state.splice(idx, 1);
            }
        }
    }
}
export const blogSlice = createSlice(options);
export const { setAllBlogs, addBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;