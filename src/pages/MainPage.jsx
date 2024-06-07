import { useDispatch } from 'react-redux';
import AddNewPostSection from '../components/AddNewPostSection/AddNewPostSection';
import PostListSection from '../components/PostListSection/PostListSection';
import { useEffect } from 'react';
import { RESET_COUNT_POSTS, SET_POSTS } from '../redux/modules/newsFeed';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 전역상태 초기화
    dispatch(RESET_COUNT_POSTS());
    dispatch(SET_POSTS([]));
  }, []);
  return (
    <div>
      <AddNewPostSection></AddNewPostSection>
      <PostListSection></PostListSection>
    </div>
  );
};

export default MainPage;
