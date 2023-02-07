import { createAsyncThunk, createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit"
import { getAllBlogs, postBlog } from "../../utils/apis/axios/api"
import { IBlog } from "../../types"
interface IUploadDetail {
    formData: FormData
    blog: IBlog
}

export const loadBlogs = createAsyncThunk<IBlog[], string>('blogs/loadBlogs', async (name: string) => {
    const blogs = (await getAllBlogs(name)).data;
    return blogs;
});

export const addBlog = createAsyncThunk<IBlog | null, IUploadDetail>('blogs/addBlog', async ({ formData, blog }) => {
    const payload = (await postBlog(formData, blog)).data;
    return payload;
})
export const blogsAdpater = createEntityAdapter<IBlog>();
const initialState = blogsAdpater.getInitialState({
    status: 'idle',
    error: ""
});
export const blogSlice = createSlice({
    name: 'blogsState',
    initialState,
    reducers: {
        removeAllBlogs: (state, action: PayloadAction<undefined>) => {
            blogsAdpater.removeAll(state);
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
                const { message } = action.error;
                state.error = message ? message : "";
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                const { payload } = action;
                if (payload) blogsAdpater.addOne(state, payload);
            })
    }
});
export const { removeAllBlogs } = blogSlice.actions;
export default blogSlice.reducer;