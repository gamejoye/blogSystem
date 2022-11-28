import { SET_TAG } from "../constant";

export const tagReducer = (state='', action) => {
    const {type, data} = action;
    switch(type) {
        case SET_TAG:
            return data;
        default:
            return state;
    }
}