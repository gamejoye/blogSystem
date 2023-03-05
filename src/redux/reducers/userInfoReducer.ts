import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/apis/axios/api";
import { IUserInfo } from "../../types";
export const loadUserInfo = createAsyncThunk<IUserInfo, string>('userInfo/loadUserInfo', async (name) => {
    const userInfo = (await getUserInfo(name)).data;
    return userInfo;
});

interface IInitial {
    status: string;
    info: IUserInfo;
    error: string;
}

const initial: IInitial = {
    status: 'idle',
    info: {
        name: 'gamejoye',
        sex: '',
        address: '',
        birthday: '',
        aboutMe: ''
    },
    error: ""
}
export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: initial,
    reducers: {},
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
                state.status = 'failed';
                const { message } = action.error;
                state.error = message ? message : "";
            })
    }
});
export default userInfoSlice.reducer;