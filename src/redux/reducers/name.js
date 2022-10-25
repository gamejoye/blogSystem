import { SET_NAME } from "../constant";
export default function addReducer(preState='gamejoye', action) {
    const {type, data} = action;
    switch(type) {
        case SET_NAME:
            return data;
        default:
            return preState;
    }
}