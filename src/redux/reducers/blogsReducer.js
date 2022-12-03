import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBlogs } from "../../utils/apis/axios/actions";
export const loadBlogs = createAsyncThunk('blogs/loadBlogs', async(name) => {
    const blogs = await (await getAllBlogs(`blogs/byName`, name)).data;
    return blogs;
})
const options = {
    name: 'blogsState',
    initialState: {
        status: 'idle',
        blogs: [],
        error: null
    },
    reducers: {
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
    }
}
export const blogSlice = createSlice(options);
export const { addBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;