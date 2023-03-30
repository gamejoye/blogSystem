import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ILeaveMessage } from "../../types";
import { getAllLeaveMessages, postLeaveMessage } from "../../utils/apis/axios/api";



const dateDescComparer = (a: ILeaveMessage, b: ILeaveMessage) => new Date(b.time).getTime() - new Date(a.time).getTime();
const dateAscComparer = (a: ILeaveMessage, b: ILeaveMessage) => new Date(a.time).getTime() - new Date(b.time).getTime();

export const loadLeaveMessages = createAsyncThunk<ILeaveMessage[]>('leaveMessages/loadLeaveMessages', async () => {
    const allLeaveMessages = (await getAllLeaveMessages()).data as ILeaveMessage[];
    // 保证留言发布的是从旧到新
    // 防止下面处理subLeaveMessage出现问题
    allLeaveMessages.sort(dateAscComparer);
    console.log(allLeaveMessages)
    const leaveMessages: ILeaveMessage[] = [];
    const map: any = {};
    allLeaveMessages.forEach(leaveMessage => {
        const { id, belongTo } = leaveMessage;
        if (belongTo === undefined) {
            map[id] = leaveMessage;
            map[id].subLeaveMessage = [];
        } else {
            map[belongTo].subLeaveMessage.push(leaveMessage);
        }
    })
    Object.values(map).forEach(leaveMessage => leaveMessages.push(leaveMessage as ILeaveMessage));
    leaveMessages.forEach(leaveMessage => leaveMessage.subLeaveMessage?.sort(dateDescComparer))
    return leaveMessages;
})

export const addLeaveMessage = createAsyncThunk<ILeaveMessage, ILeaveMessage>('leaveMessages/addLeaveMessage', async (message) => {
    const leaveMessage = (await postLeaveMessage(message)).data;
    if(leaveMessage === null) {
        throw new Error('不存在该邮箱，请先交换友情链接😄');
    }
    console.log('')
    return leaveMessage;
})

export const leaveMessagesAdapter = createEntityAdapter<ILeaveMessage>({sortComparer: dateDescComparer})
const initialState = leaveMessagesAdapter.getInitialState({
    status: 'idle',
    error: ''
});
export const leaveMessagesSlice = createSlice({
    name: 'leaveMessagesState',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadLeaveMessages.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadLeaveMessages.fulfilled, (state, action) => {
                const { payload } = action;
                state.status = 'succeeded';
                leaveMessagesAdapter.addMany(state, payload);
            })
            .addCase(loadLeaveMessages.rejected, (state, action) => {
                const { error } = action;
                state.status = 'falied';
                state.error = error.message ?? "";
            })
            .addCase(addLeaveMessage.fulfilled, (state, action) => {
                const { payload } = action;
                const { belongTo } = payload;
                if(belongTo === undefined || belongTo === null) {
                    leaveMessagesAdapter.addOne(state, payload);
                } else {
                    state.entities[belongTo]?.subLeaveMessage?.unshift(payload);
                }
            })
    },
})

export default leaveMessagesSlice.reducer;