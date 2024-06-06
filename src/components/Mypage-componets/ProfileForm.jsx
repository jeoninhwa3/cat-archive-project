import { useState } from 'react';
import styled from 'styled-components';
import supabase from '../../supabaseClient';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
const StButton = styled.button`
  font-size: 15px;
  border: none;
  padding: 3px 10px 5px;
  border-radius: 7px;
`;
const StInput = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
`;

const ProfileForm = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  // const [user, setUser] = useState();
  const [url, setUrl] = useState(
    'https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/default-profile.jpg'
  );

  // const getUsers = async () => {
  //   const { data: users, error } = await supabase.from('users').select().eq('id', id);
  //   setUser(users);
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   return users;
  // };

  // useEffect(() => {
  //   getUsers().then((user) => dispatch(setUser(user)));
  // }, []);

  async function handleFileInputChange(files) {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data } = await supabase.storage.from('users').upload(`avatar_${Date.now()}.png`, file);

    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/${data.path}`);
  }

  // 프로필 사진 변경

  const addHandler = async () => {
    const { data, error } = await supabase
      .from('users') // 'user' 대신 'users'로 변경
      .update({ url }) 
      .eq('id', id)
      .single(); // 단일 객체를 가져오기 위해 'single()' 추가

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      alert('프로필 수정 완료');
    }
  };
  return (
    <StProfileBox>
      <StImg src={url} alt="미리보기 이미지" />
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
