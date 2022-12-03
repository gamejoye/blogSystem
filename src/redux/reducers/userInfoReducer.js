import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/apis/axios/api";
import { getCookie } from "../../utils/apis/cookie/getCookie";
export const loadUserInfo = createAsyncThunk('userInfo/loadUserInfo', async (name) => {
    const userInfo = (await getUserInfo('user/introduction', name)).data;
    return userInfo;
});
const initial = {
    status: '',
    info: {
        name: getCookie("user"),
        sex: '',
        address: '',
        birthday: '',
        aboutMe: ''
    },
    error: null
}
const options = {
    name: 'userInfo',
    initialState: initial,
    reducers: {
        setUserInfo: (state, action) => {
            state.info = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loadUserInfo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadUserInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(loadUserInfo.rejected, (state, action) => {
                state.status = 'falied';
                state.error = action.error.message;
            })
    }
}
export const userInfoSlice = createSlice(options);
export const { setUserInfo, setName, setAboutMe, setAddresss, setBirthday, setSex } = userInfoSlice.actions;
export default userInfoSlice.reducer;