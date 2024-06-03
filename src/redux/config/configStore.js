import { configureStore } from '@reduxjs/toolkit';
import { TEMP_REDUCER } from '../modules/newsFeed';
const store = configureStore({
  reducer: { TEMP_REDUCER }
});

export default store;
