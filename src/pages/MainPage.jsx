import { useSelector } from 'react-redux';
import AddNewPostSection from '../components/AddNewPostSection/AddNewPostSection';
import PostListSection from '../components/PostListSection/PostListSection';

const MainPage = () => {
  // 임시 데이터 설정해둠
  // const [USER_ID, IS_LOGGED_IN] = ['0xABCDE', true];
  const postsArrangeType = useSelector((state) => {
    return state.newsFeed.postsArrangeType;
  });
  return (
    <div>
      <p style={{ color: 'white' }}>{postsArrangeType}</p>
      <AddNewPostSection></AddNewPostSection>
      <PostListSection></PostListSection>
    </div>
  );
};

export default MainPage;
