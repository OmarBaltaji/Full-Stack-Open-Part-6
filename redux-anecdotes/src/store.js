import { configureStore } from '@reduxjs/toolkit';

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer, { hideNotification } from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  if (state.notification) {
    setTimeout(() => {
      store.dispatch(hideNotification());
    }, 5000);
  }
});

export default store;