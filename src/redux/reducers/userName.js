import { SET_USER_NAME } from "../constant";
export default function addReducer(preState = "",action) {
    const {type, data} = action;
    switch(type) {
        case SET_USER_NAME:
            return data;
        default:
            return preState;
    }
}