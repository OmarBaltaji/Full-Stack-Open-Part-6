import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(_, action) {
      return action.payload;
    },
    hideNotification () {
      return '';
    }
  }
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;