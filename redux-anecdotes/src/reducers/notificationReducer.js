import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotificationMessage(_, action) {
      return action.payload;
    },
    hideNotification () {
      return '';
    }
  }
});

export const { setNotificationMessage, hideNotification } = notificationSlice.actions;

export const setNotification = (message, timeToDisplay) => {
  return dispatch => {
    dispatch(setNotificationMessage(message));

    setTimeout(() => {
      dispatch(hideNotification());
    }, timeToDisplay);
  }
}

export default notificationSlice.reducer;