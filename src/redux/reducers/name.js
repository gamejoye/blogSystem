import { SET_NAME } from "../constant";
import { getCookie } from "../../utils/apis/cookie/getCookie";
export default function nameReducer(preState=getCookie("user"), action) {
    const {type, data} = action;
    switch(type) {
        case SET_NAME:
            return data;
        default:
            return preState;
    }
}