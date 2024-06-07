import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import ProfileForm from '../components/Mypage-componets/ProfileForm';
import MyPostList from '../components/Mypage-componets/MyPostList';
import { getUser } from '../api/auth';

// styled-components
const StContainer = styled.div`
  display: flex;
  min-width: 1200px;
  padding: 80px 120px;
`;

const UserProfilePage = () => {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  // 내가 올린 게시글 가져오기
  async function getPosts() {
    const { data: getData } = await supabase.auth.getSession();
    const userId = getData.session.user.id;
    const { data: myPost } = await supabase
      .from('posts')
      .select()
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    setPosts(myPost);
  }

  // 유저 정보 저장, 게시글 가져오는 함수 실행
  useEffect(() => {
    getPosts();
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
      } else {
        console.log('Error user');
      }
    };
    fetchData();
  }, []);

  return (
    <StContainer>
      <ProfileForm user={user} />
      <MyPostList posts={posts} />
    </StContainer>
  );
};

export default UserProfilePage;
