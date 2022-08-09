import { SET_NAV_SHOW } from "./constant"
import { SET_USER } from "./constant";
export const setNavshow = (data) =>  ({
    type: SET_NAV_SHOW,
    data
});

export const setUser = (data) => ({
    type:  SET_USER,
    data
})