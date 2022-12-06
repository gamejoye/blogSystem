import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getAllBlogs, postBlog } from "../../utils/apis/axios/api";
export const loadBlogs = createAsyncThunk('blogs/loadBlogs', async (name) => {
    const blogs = (await getAllBlogs('blogs/byName', name)).data;
    return blogs;
});
export const addBlog = createAsyncThunk('blogs/addBlog', async ({ formData, blog }) => {
    const payload = (await postBlog('files/blogs/images/upload', formData, 'blogs/addition', blog)).data;
    return payload;
})
export const blogsAdpater = createEntityAdapter();
const initialState = blogsAdpater.getInitialState({
    status: 'idle',
    error: null
});
const options = {
    name: 'blogsState',
    initialState,
    reducers: {
        removeBlog: (state, action) => {
            const { payload } = action;
            const blog = state.entities[payload.id];
            if(blog) {
                blogsAdpater.removeOne(state, blog.id);
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loadBlogs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadBlogs.fulfilled, (state, action) => {
                const { payload } = action;
                state.status = 'succeeded';
                blogsAdpater.addMany(state, payload);
            })
            .addCase(loadBlogs.rejected, (state, action) => {
                state.status = 'falied';
                state.error = action.error.message;
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                const { payload } = action;
                if (payload !== "failed") blogsAdpater.addOne(state, payload);
            })
    }
}
export const blogSlice = createSlice(options);
export const { removeBlog } = blogSlice.actions;
export default blogSlice.reducer;