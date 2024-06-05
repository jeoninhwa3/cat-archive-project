import { createSlice } from '@reduxjs/toolkit';
import supabase from '../../supabaseClient';

const fetchSessionId = async () => {
  const {
    data: { session }
  } = await supabase.auth.getSession();
  return session.user.id;
};

const initialState = {
  postsArrangeType: 'latest',
  posts: [],
  postsCounter: 0,
  isLoggedIn: true
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
