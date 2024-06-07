import { configureStore } from '@reduxjs/toolkit';
import newsFeed from '../modules/newsFeed';

const store = configureStore({
  reducer: { newsFeed: newsFeed }
});

export default store;
