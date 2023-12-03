import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(_, action) {
      return action.payload;
    },
    hideNotification () {
      return '';
    }
  }
});

export const { setMessage, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;