import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import ProfileForm from '../components/Mypage-componets/ProfileForm';
import MyPostList from '../components/Mypage-componets/MyPostList';
import { getUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

// styled-components
const StContainer = styled.div`
  display: flex;
  min-width: 1200px;
  padding: 80px 120px;
`;

const UserProfilePage = () => {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  async function getPosts() {
    const { data: getData, error } = await supabase.auth.getSession();
    const userId = getData.session.user.id;
    const { data: myPost } = await supabase.from('posts').select().eq('user_id', userId);

    setPosts(myPost);
  }

  useEffect(() => {
    // if (!user) {
    //   navigate('/login');
    // }
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
      <MyPostList user={user} posts={posts} />
    </StContainer>
  );
};

export default UserProfilePage;
