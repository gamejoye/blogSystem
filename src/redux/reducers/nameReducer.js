import { getCookie } from "../../utils/apis/cookie/getCookie";
import { createSlice } from "@reduxjs/toolkit";
const options = {
    name: 'name',
    initialState: getCookie("user"),
    reducers: {
        setName: (state, action) => {
            return action.payload;
        }
    }
}
export const nameSlice = createSlice(options);
export const { setName } = nameSlice.actions;
export default nameSlice.reducer;