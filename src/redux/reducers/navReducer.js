import { SET_NAV_SHOW } from "../constant";
export const navReducer = (preState=true, action) => {
    const {type, data} = action;
    switch(type) {
        case SET_NAV_SHOW:
            return data;
        default:
            return preState;
    }
}