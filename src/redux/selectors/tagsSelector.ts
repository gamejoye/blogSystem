import { createSelector } from "@reduxjs/toolkit";
import { tagsAdapter } from "../reducers/selectedTagsReducer";
import { IRootState } from "../store";
export const { selectAll } = tagsAdapter.getSelectors((state: IRootState) => state.selectedTags);
export const selectSelectedTags = createSelector(
    [selectAll],
    (tagObjects) => {
        return tagObjects.map(tagObject => tagObject.tag)
    }
);