import { useState, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../../supabaseClient';

// styled-components
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 300px;
  margin-right: 70px;
  text-align: center;
`;
const StImg = styled.img`
  display: block;
  width: 150px;
  border-radius: 50%;
`;
const StButton = styled.button`
  font-size: 15px;
  border: none;
  padding: 3px 10px 5px;
  border-radius: 7px;
`;

const ProfileForm = ({ user }) => {
  const [previewUrl, setPreviewUrl] = useState([
    'https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/default-profile.jpg'
  ]);
  const [profileUrl, setProfileUrl] = useState(null);

  useEffect(() => {
    checkProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // console.log(user.email);
  function checkProfile() {
    const { data } = supabase.storage.from('users').getPublicUrl('default-profile.jpg');

    setProfileUrl(data.publicUrl);
    console.log(data.publicUrl);
  }
  return (
    <>
      {/* <p>{user.email}님 안녕하세요!</p> */}
      <StForm onSubmit={handleSubmit}>
        <label>
          <StImg src={previewUrl} alt="미리보기 이미지" />
        </label>
        <StButton type="submit">프로필 수정하기</StButton>
      </StForm>
    </>
  );
};

export default ProfileForm;
