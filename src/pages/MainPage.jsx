import AddNewPostSection from '../components/AddNewPostSection/AddNewPostSection';
import PostListSection from '../components/PostListSection/PostListSection';

const MainPage = () => {
  // 임시 데이터 설정해둠
  // const [USER_ID, IS_LOGGED_IN] = ['0xABCDE', true];

  return (
    <div>
      <AddNewPostSection></AddNewPostSection>
      <PostListSection></PostListSection>
    </div>
  );
};

export default MainPage;
