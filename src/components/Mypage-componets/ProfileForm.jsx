import { useState, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../../supabaseClient';

// styled-components
const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 30px;
  width: 280px;
  height: 260px;
  padding: 30px 10px;
  margin-right: 70px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 0px 5px #ddd;
  box-sizing: border-box;
`;
const StImg = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;
const StImgBox = styled.div``;
const StIcon = styled.span`
  position: absolute;
  bottom: 17px;
  right: 17px;
  color: #bbb;
  font-size: 30px;
  cursor: pointer;
`;
const StInput = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
`;
const StChangeBox = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 20px);
  height: 65px;
  background-color: #151516;
  border-radius: 10px;
  z-index: 10;
`;
const Stlabel = styled.label`
  color: #fff;
  cursor: pointer;
`;
const StSaveBtn = styled.button`
  position: absolute;
  bottom: 2px;
  right: 5px;
  border: none;
  background-color: inherit;
  color: #fff;
  cursor: pointer;
`;

const ProfileForm = ({ user }) => {
  const defaultImg =
    'https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/default-profile.jpg?t=2024-06-06T12%3A50%3A21.111Z';
  const [url, setUrl] = useState();
  const [isToggled, setIsToggled] = useState(true);

  // 테이블에 저장된 url 가져오기
  async function getUrl() {
    if (!user) return; // user가 정의되지 않은 경우 빠르게 종료
    const { data: getData } = await supabase.from('users').select().eq('id', user.id);
    setUrl(getData[0].url);
  }

  useEffect(() => {
    getUrl();
  }, [user]);

  // supabase에 이미지 업로드, 이미지 url 가져오기
  const handleFileInputChange = async (files) => {
    const [file] = files;
    if (!file) {
      return;
    }
    const { data } = await supabase.storage.from('users').upload(`avatar_${Date.now()}.png`, file);

    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/users/${data.path}`);
  };

  // 프로필 사진 업데이트
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
    setIsToggled(!isToggled);
  };

  // 토글 버튼
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <StProfileBox>
      <StImgBox>
        <StImg src={url ? url : defaultImg} alt="프로필" />
        <StIcon className="material-symbols-outlined" onClick={handleToggle}>
          edit
        </StIcon>
      </StImgBox>

      <p style={{ color: '#fff' }}>{user ? user.email + '님\n안녕하세요!' : '안녕하세요'}</p>

      <StChangeBox style={{ display: isToggled ? 'none' : 'block' }}>
        <form className="editProfile">
          <Stlabel>
            사진 선택
            <StInput type="file" onChange={(e) => handleFileInputChange(e.target.files)} />
            <StSaveBtn type="button" onClick={addHandler}>
              저장
            </StSaveBtn>
          </Stlabel>
        </form>
      </StChangeBox>
    </StProfileBox>
  );
};

export default ProfileForm;
