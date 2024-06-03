import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const newsFeed = createSlice({
  name: 'newsFeed',
  initialState: initialState,
  reducers: {
    TEMP_REDUCER: (state, action) => {
      console.log(state);
      console.log(action);
    }
  }
});

export const { TEMP_REDUCER } = newsFeed.actions;
export default newsFeed.reducer;
