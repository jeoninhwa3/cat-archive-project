import { useState } from 'react';
import styled from 'styled-components';
import supabase from '../../supabaseClient';
// import { useDispatch } from 'react-redux';

// styled-components
const StProfileBox = styled.div`
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
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
const StImgBox = styled.div`
  position: relative;
`;
const StButton = styled.button`
  font-size: 15px;
  border: none;
  padding: 3px 10px 5px;
  border-radius: 7px;
`;
const StIcon = styled.span`
  position: absolute;
`;
const StInput = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
`;

const ProfileForm = ({ user }) => {
  console.log(user);
  // const dispatch = useDispatch();
  // const [user, setUser] = useState();
  const [url, setUrl] = useState(
    'https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/default-profile.jpg'
  );

  const handleFileInputChange = async (files) => {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data } = await supabase.storage.from('users').upload(`avatar_${Date.now()}.png`, file);

    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/${data.path}`);
  };
  console.log(url);
  // 프로필 사진 변경
  const addHandler = async () => {
    const { data, error } = await supabase
      .from('users')
      .update({
        url
      })
      .eq('id', user.id)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  console.log(url);
  return (
    <StProfileBox>
      <StImgBox>
        <StImg src={url} alt="미리보기 이미지" />
        <StIcon className="material-symbols-outlined">settings</StIcon>
      </StImgBox>
      {/* <p style={{ color: '#fff' }}>{user.email}님 안녕하세요!</p> */}
      <StButton onClick={addHandler}>프로필 수정하기</StButton>
      <form>
        {/* <input type="text" placeholder="이름" /> */}
        <label>
          프로필 사진 변경
          <StInput type="file" onChange={(e) => handleFileInputChange(e.target.files)} />
        </label>
      </form>
    </StProfileBox>
  );
};

export default ProfileForm;
