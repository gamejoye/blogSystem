import { ADD_TAG, REMOVE_TAG, SET_TAG } from "../constant";

export const setTag = data => ({
    type: SET_TAG,
    data
});

export const addTag = data => ({
    type: ADD_TAG,
    data
})

export const removeTag = data => ({
    type: REMOVE_TAG,
    data
})