import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/apis/axios/actions";
import { getCookie } from "../../utils/apis/cookie/getCookie";
export const loadUserInfo = createAsyncThunk('userInfo/loadUserInfo', async (name) => {
    const userInfo = (await getUserInfo('user/introduction', name)).data;
    return userInfo;
})
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
        setName: (state, action) => {
            state.info.name = action.payload;
        },
        setSex: (state, action) => {
            state.info.sex = action.payload;
        },
        setBirthday: (state, action) => {
            state.info.birthday = action.payload;
        },
        setAboutMe: (state, action) => {
            state.info.aboutMe = action.payload;
        },
        setAddresss: (state, action) => {
            state.info.addresss = action.payload;
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
export const { setName, setAboutMe, setAddresss, setBirthday, setSex } = userInfoSlice.actions;
export default userInfoSlice.reducer;