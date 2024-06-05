import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import ProfileForm from '../components/ProfileForm';
import MyPostList from '../components/MyPostList';
import { getUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
// import MyChallenge from '../components/MyChallenge';
// import { useNavigate } from 'react-router-dom';
// import dummy from '../dummy.json';

// styled-components
const StContainer = styled.div`
  display: flex;
  padding: 30px;
  border: 5px solid red;
`;

const UserProfilePage = () => {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  // posts 전체 데이터 가지고 오기
  async function getPosts() {
    const { data } = await supabase.from('posts').select();
    // const { data } = await supabase.from('posts').select().eq('user_id', '7ada0baa-12bd-48d9-ae1f-0f29638fba8b');
    console.log(data);
    setPosts(data);
  }
  console.log(posts);
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    getPosts();
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
        console.log(user);
      } else {
        console.log('Error user');
      }
    };
    fetchData();

    // 유저id, 게시물 id 필터해주기
    // const PostFilter = posts.filter((post) => post.id == 'ebcec2cd-ff09-45af-bea5-d99673c45cfe');
    // console.log(PostFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <StContainer>
      <ProfileForm />
      <MyPostList user={user} posts={posts} />
    </StContainer>
  );
};

export default UserProfilePage;
