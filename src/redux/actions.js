import { SET_NAV_SHOW } from "./constant"
import { SET_USER_NAME } from "./constant";
export const setNavshow = (data) =>  ({
    type: SET_NAV_SHOW,
    data
});
export const setUserName = (data) => ({
    type: SET_USER_NAME,
    data
});

