import { useDispatch } from 'react-redux';
import AddNewPostSection from '../components/AddNewPostSection/AddNewPostSection';
import PostListSection from '../components/PostListSection/PostListSection';
import { useEffect } from 'react';
import { SET_POSTS, SET_POSTS_COUNTER } from '../redux/modules/newsFeed';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SET_POSTS([]));
    dispatch(SET_POSTS_COUNTER(0));
  }, []);
  return (
    <div>
      <AddNewPostSection></AddNewPostSection>
      <PostListSection></PostListSection>
    </div>
  );
};

export default MainPage;
