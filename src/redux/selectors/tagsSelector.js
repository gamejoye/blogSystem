import { createSelector } from "@reduxjs/toolkit";
import { tagsAdapter } from "../reducers/selectedTagsReducer";
export const { selectAll } = tagsAdapter.getSelectors(state => state.selectedTags);
export const selectSelectedTags = createSelector(
    [selectAll],
    (tagObjects) => {
        return tagObjects.map(tagObject => tagObject.tag)
    }
);