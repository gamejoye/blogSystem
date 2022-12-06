import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const tagsAdapter = createEntityAdapter();
const initialState = tagsAdapter.getInitialState();
const options = {
    name: 'selectedTags',
    initialState,
    reducers: {
        addTag: (state, action) => {
            tagsAdapter.addOne(state, {
                id: action.payload,
                tag: action.payload
            });
        },
        removeTag: (state, action) => {
            const { payload } = action;
            const tag = state.entities[payload];
            if (tag) {
                tagsAdapter.removeOne(state, payload);
            }
        },
        removeAllTags: (state, action) => {
            tagsAdapter.removeAll(state);
        }
    }
}

export const tagSlice = createSlice(options);
export const { addTag, removeTag, removeAllTags } = tagSlice.actions;
export default tagSlice.reducer;