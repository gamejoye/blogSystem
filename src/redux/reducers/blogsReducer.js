import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBlogs, postBlog } from "../../utils/apis/axios/api";
export const loadBlogs = createAsyncThunk('blogs/loadBlogs', async (name) => {
    const blogs = (await getAllBlogs('blogs/byName', name)).data;
    return blogs;
});
export const addBlog = createAsyncThunk('blogs/addBlog', async ({ formData, blog }) => {
    const payload = (await postBlog('files/blogs/images/upload', formData, 'blogs/addition', blog)).data;
    return payload;
})
const options = {
    name: 'blogsState',
    initialState: {
        status: 'idle',
        blogs: [],
        error: null
    },
    reducers: {
        removeBlog: (state, action) => {
            const { payload } = action;
            const idx = state.blogs.findIndex(blog => blog.id == payload.id);
            if (idx != -1) {
                state.blogs.splice(idx, 1);
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loadBlogs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;
            })
            .addCase(loadBlogs.rejected, (state, action) => {
                state.status = 'falied';
                state.error = action.error.message;
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                const { payload } = action;
                if (payload !== "failed") state.blogs.push(payload);
            })
    }
}
export const blogSlice = createSlice(options);
export const { removeBlog } = blogSlice.actions;
export default blogSlice.reducer;