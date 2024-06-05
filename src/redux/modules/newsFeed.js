import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsArrangeType: 'latest',
  posts: [],
  postsCounter: 0,
  isLoggedIn: false
};

const newsFeed = createSlice({
  name: 'newsFeed',
  initialState: initialState,
  reducers: {
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
    },
    SET_IS_LOGGED_IN: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { SET_IS_LOGGED_IN, SET_POST_ARRANGE_TYPE, SET_POSTS, COUNT_POSTS, SET_POSTS_COUNTER } = newsFeed.actions;
export default newsFeed.reducer;
