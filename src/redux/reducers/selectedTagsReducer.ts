import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { ISelectedTags } from "../../types";
export const tagsAdapter = createEntityAdapter<ISelectedTags>();
const initialState = tagsAdapter.getInitialState();


export const tagSlice = createSlice({
    name: 'selectedTags',
    initialState,
    reducers: {
        addTag: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            tagsAdapter.addOne(state, {
                id: payload,
                tag: payload
            });
        },
        removeTag: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            tagsAdapter.removeOne(state, payload);
        },
        removeAllSelectedTags: (state, action: PayloadAction<undefined>) => {
            tagsAdapter.removeAll(state);
        }
    }
});
export const { addTag, removeTag, removeAllSelectedTags } = tagSlice.actions;
export default tagSlice.reducer;