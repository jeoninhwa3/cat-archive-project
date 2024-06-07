import { createSlice } from '@reduxjs/toolkit';

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
      const editedTimeArray = action.payload.map((item) => {
        const inputDate = new Date(item.created_at);
        const new_date = new Intl.DateTimeFormat('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(inputDate);
        return {
          ...item,
          ...{
            created_at: new_date
          }
        };
      });
      state.posts = [...editedTimeArray];
    },
    COUNT_POSTS: (state, action) => {
      state.postsCounter += action.payload;
    },
    RESET_COUNT_POSTS: (state) => {
      state.postsCounter = 0;
    },
    SET_POSTS_COUNTER: (state, action) => {
      state.postsCounter = action.payload;
    },
    SET_IS_LOGGED_IN: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { SET_IS_LOGGED_IN, SET_POST_ARRANGE_TYPE, SET_POSTS, COUNT_POSTS, RESET_COUNT_POSTS, SET_POSTS_COUNTER } =
  newsFeed.actions;
export default newsFeed.reducer;
