// import supabase from '../supabaseClient';
import { getUser } from '../api/auth';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';

// styled-components
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin-right: 70px;
  text-align: center;
`;

const ProfileForm = () => {
  const [previewUrl, setPreviewUrl] = useState([
    'https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/default-profile.jpg'
  ]);
  const [user, setUser] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  // console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      if (userData) {
        setUser(userData);
      } else {
        console.log('Error user');
      }
    };

    fetchUser();
    checkProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function checkProfile() {
    const { data } = supabase.storage.from('users').getPublicUrl('default-profile.jpg');

    setProfileUrl(data.publicUrl);
    console.log(data.publicUrl);
  }

  // const handleImageChange = (event) => {
  //   const fileObj = event.target.files[0];
  //   const objectUrl = URL.createObjectURL(fileObj);
  //   setPreviewUrl(objectUrl);
  // };

  async function handleImageChange(files) {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data } = await supabase.storage.from('users').upload(`user_${Date.now()}.png`, file);
    console.log(data);

    setProfileUrl(`https://<project>.supabase.co/storage/v1/object/users/public/${data.path}`);
  }

  return (
    <>
      {/* <p>{user.email}님 안녕하세요!</p> */}
      <StForm onSubmit={handleSubmit}>
        <label>
          <img src={previewUrl} alt="미리보기 이미지" width={200} />
        </label>

        <label>
          이름
          <input type="text" />
        </label>

        <label style={{ backgroundColor: '#999', display: 'inline-block', height: '40px' }}>
          사진 변경
          <input
            type="file"
            onChange={(e) => handleImageChange(e.target.files)}
            style={{ position: 'absolute', width: '0', height: '0', overflow: 'hidden' }}
          />
        </label>
        <button type="submit">수정</button>
      </StForm>
    </>
  );
};

export default ProfileForm;
