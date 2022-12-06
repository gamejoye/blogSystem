import { createSelector } from "@reduxjs/toolkit";

export const selectUserInfo = state => state.userInfo.info;
export const selectName = createSelector(
    [state => state.userInfo.info],
    (info) => info.name
)
export const selectAboutMe = createSelector(
    [state => state.userInfo.info],
    (info) => info.aboutMe
)