import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import supabase from '../../supabaseClient';
import {
  Logo,
  StyledHeader,
  ProfileSignInOutBtn,
  LogoContainer,
  ProfileSignInOutBtnContainer
} from './Header.styledcomp';
import { useDispatch } from 'react-redux';
import { SET_IS_LOGGED_IN } from '../../redux/modules/newsFeed';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  async function getPosts() {
    const { data: getData, error } = await supabase.auth.getSession();
    setUserId(getData.session.user.id);
  }
  getPosts();

  const handleHeaderBtnClick = (event) => {
    if (event.target.id === 'to-profile-btn') {
      navigate(`/myPage/${userId}`);
    }
  };
  const dispatch = useDispatch();
  const signOutUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signOut();
    console.log('signout: ', { data, error }); // data는 딱히 필요없을 듯
    setUser(null);
    dispatch(SET_IS_LOGGED_IN(false));
    navigate('/');
  };

  return (
    <StyledHeader>
      <LogoContainer>
        <Logo
          onClick={() => {
            navigate('/');
          }}
        ></Logo>
      </LogoContainer>
      <ProfileSignInOutBtnContainer>
        <ProfileSignInOutBtn id="to-profile-btn" onClick={handleHeaderBtnClick}>
          마이페이지
        </ProfileSignInOutBtn>
        <ProfileSignInOutBtn id="sign-out-btn" onClick={signOutUser}>
          로그아웃
        </ProfileSignInOutBtn>
      </ProfileSignInOutBtnContainer>
    </StyledHeader>
  );
};

export default Header;
