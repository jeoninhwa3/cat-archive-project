import { useState } from 'react';
import {
  PostArrangeDropDownContainer,
  PostArrangeDropDownItem,
  PostArrangeDropDownList,
  PostArrangeDropDownTitle
} from './PostArrangeDropDown.styledcomp';
import { useDispatch, useSelector } from 'react-redux';
import { SET_POSTS, SET_POSTS_COUNTER, SET_POST_ARRANGE_TYPE } from '../../redux/modules/newsFeed';

function PostArrangeDropDown() {
  const [isDropdownView, setIsDropdownView] = useState(false);

  const handleClickContainer = () => {
    setIsDropdownView(!isDropdownView);
  };

  const postsArrangeType = useSelector((state) => {
    return state.newsFeed.postsArrangeType;
  });

  const dispatch = useDispatch();

  const handleClickArrangeToLatest = () => {
    dispatch(SET_POST_ARRANGE_TYPE({ postArrageType: 'latest' }));
    dispatch(SET_POSTS([]));
    dispatch(SET_POSTS_COUNTER(0));
  };

  const handleClickArrangeToMostLikes = () => {
    dispatch(SET_POST_ARRANGE_TYPE({ postArrageType: 'oldest' }));
    dispatch(SET_POSTS([]));
    dispatch(SET_POSTS_COUNTER(0));
  };

  return (
    <PostArrangeDropDownContainer onClick={handleClickContainer}>
      <PostArrangeDropDownTitle>
        보기 방식: {postsArrangeType === 'latest' ? '최신순' : '오래된순'}
      </PostArrangeDropDownTitle>

      {isDropdownView && (
        <PostArrangeDropDownList>
          <PostArrangeDropDownItem onClick={handleClickArrangeToLatest}>최신순</PostArrangeDropDownItem>
          <PostArrangeDropDownItem onClick={handleClickArrangeToMostLikes}>오래된순</PostArrangeDropDownItem>
        </PostArrangeDropDownList>
      )}
    </PostArrangeDropDownContainer>
  );
}

export default PostArrangeDropDown;
