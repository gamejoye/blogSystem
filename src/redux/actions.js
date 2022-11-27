import { SET_NAME, SET_NAV_SHOW } from "./constant"
export const setNav = (data) =>  ({
    type: SET_NAV_SHOW,
    data
});

export const setName = (data) => ({
    type:  SET_NAME,
    data
})