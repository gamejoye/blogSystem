import { createSlice } from "@reduxjs/toolkit";
const options = {
    name: 'selectedTags',
    initialState: [],
    reducers: {
        addTag: (state, action) => {
            const { payload } = action;
            state.push(payload);
        },
        removeTag: (state, action) => {
            const { payload } = action;
            const idx = state.findIndex(blog => blog.id == payload.id);
            if (idx != -1) {
                state.splice(idx, 1);
            }
        }
    }
}
export const tagSlice = createSlice(options);
export const { addTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;