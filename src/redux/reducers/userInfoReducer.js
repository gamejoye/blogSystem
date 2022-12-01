import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/apis/cookie/getCookie";
const initial = {
    name: getCookie("user"),
    sex: '',
    address: '',
    birthday: '',
    aboutMe: ''
}
const options = {
    name: 'userInfo',
    initialState: initial,
    reducers: {
        setUserInfo: (state, action) => {
            return action.payload;
        },
        setName: (state, action) => {
            return {
                ...state,
                name: action.payload
            }
        },
        setSex: (state, action) => {
            return {
                ...state,
                sex: action.payload
            }
        },
        setBirthday: (state, action) => {
            return {
                ...state,
                birthday: action.payload
            }
        },
        setAboutMe: (state, action) => {
            return {
                ...state,
                aboutMe: action.payload
            }
        },
        setAddresss: (state, action) => {
            return {
                ...state,
                addresss: action.payload
            }
        }
    }
}
export const userInfoSlice = createSlice(options);
export const { setUserInfo, setName, setAboutMe, setAddresss, setBirthday, setSex } = userInfoSlice.actions;
export default userInfoSlice.reducer;