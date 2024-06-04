// import { useEffect } from 'react';
// import { signInWithEmail } from '../api/auth';
// import supabase from '../supabaseClient';
import styled from 'styled-components';
import ProfileForm from '../components/ProfileForm';
import MyPostList from '../components/MyPostList';
import MyChallenge from '../components/MyChallenge';
// import { useNavigate } from 'react-router-dom';
// import GetTest from '../components/GetTest';
// import dummy from '../dummy.json';

// styled-components
const StContainer = styled.div`
  display: flex;
  padding: 30px;
  border: 5px solid red;
`;

const UserProfilePage = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   signInWithEmail();
  // }, []);
  // const handleBack = () => {
  //   navigate(-1);
  // };
  return (
    <StContainer>
      {/* <GetTest /> */}
      <ProfileForm />
      <div>
        <MyPostList />
        <MyChallenge />
      </div>
    </StContainer>
  );
};

export default UserProfilePage;
