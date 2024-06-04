// import supabase from '../supabaseClient';
import { useState } from 'react';
import styled from 'styled-components';

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
  // const [users, setUsers] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from('users').select('*');
  //     if (error) {
  //       console.log('error => ', error);
  //     } else {
  //       setUsers(data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleImageChange = (event) => {
    const fileObj = event.target.files[0];
    const objectUrl = URL.createObjectURL(fileObj);
    setPreviewUrl(objectUrl);
  };

  return (
    <>
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
            onChange={handleImageChange}
            style={{ position: 'absolute', width: '0', height: '0', overflow: 'hidden' }}
          />
        </label>
        <button type="submit">수정</button>
      </StForm>
    </>
  );
};

export default ProfileForm;
