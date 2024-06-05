import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsArrangeType: 'latest',
  posts: [],
  postsCounter: 0
};

const newsFeed = createSlice({
  name: 'newsFeed',
  initialState: initialState,
  reducers: {
    TEMP_REDUCER: (state, action) => {
      console.log(state);
      console.log(action);
    },
    SET_POST_ARRANGE_TYPE: (state, action) => {
      state.postsArrangeType = action.payload.postArrageType;
    },
    SET_POSTS: (state, action) => {
      state.posts = [...action.payload];
    },
    COUNT_POSTS: (state, action) => {
      state.postsCounter += action.payload;
    },
    SET_POSTS_COUNTER: (state, action) => {
      state.postsCounter = action.payload;
    }
  }
});

export const { TEMP_REDUCER, SET_POST_ARRANGE_TYPE, SET_POSTS, COUNT_POSTS, SET_POSTS_COUNTER } = newsFeed.actions;
export default newsFeed.reducer;
