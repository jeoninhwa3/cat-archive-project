import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Logo,
  StyledHeader,
  ProfileSignInOutBtn,
  LogoContainer,
  ProfileSignInOutBtnContainer
} from './Header.styledcomp';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const handleHeaderBtnClick = (event) => {
    if (event.target.id === 'to-profile-btn') {
      navigate('/myPage/:user_id');
    } else if (event.target.id === 'sign-out-btn') {
      setIsLoggedIn(false);
    } else if (event.target.id === 'sign-in-btn') {
      setIsLoggedIn(true);
    }
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
        <ProfileSignInOutBtn id="sign-out-btn" onClick={handleHeaderBtnClick}>
          로그아웃
        </ProfileSignInOutBtn>
      </ProfileSignInOutBtnContainer>
    </StyledHeader>
  );
};

export default Header;
