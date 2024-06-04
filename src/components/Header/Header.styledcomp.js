import styled from 'styled-components';
import img from '../../assets/temp_logo.png';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 120px;
  padding-left: 120px;
  background-color: rgb(37, 38, 44);
  height: 96px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 100;
`;

export const LogoContainer = styled.div`
  width: calc(100% - 240px);
  display: flex;

  justify-content: start;
`;

export const Logo = styled.div`
  position: relative;

  background-image: url(${img});
  width: 70px;
  height: 70px;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileSignInOutBtnContainer = styled.div`
  display: flex;
  min-width: 240px;
  justify-content: end;
  gap: 5%;
`;

export const ProfileSignInOutBtn = styled.button`
  border-radius: 10px;
  padding: 4% 10%;
  border-style: none;
  color: rgb(202, 202, 202);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  background-color: rgb(60, 62, 66);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgb(85, 82, 92);
    transition: 0.3s;
  }
`;
