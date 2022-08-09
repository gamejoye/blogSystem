import { SET_USER } from "../constant";
export default function addReducer(preState='', action) {
    const {type, data} = action;
    switch(type) {
        case SET_USER:
            return data;
        default:
            return preState;
    }
}