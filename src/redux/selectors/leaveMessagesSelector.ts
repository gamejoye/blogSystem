import { leaveMessagesAdapter } from "../reducers/leaveMessagesReducer";
import { IRootState } from "../store";

export const {selectAll: selectAllLeaveMessages} = leaveMessagesAdapter.getSelectors((state: IRootState) => state.leaveMessages);
export const selectLeaveMessagesStatus = (state: IRootState) => state.leaveMessages.status;