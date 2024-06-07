import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainStation = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  align-items: center;
  background-color: rgb(21, 21, 22);
  min-height: 100vh;
  padding-top: 100px;
`;
export const UpperBox = styled.div`
  width: 350px;

  border: 1px solid lightgrey;
  color: gray;
  background-color: rgb(226 226 226);
`;
export const MainLogo = styled.div`
  margin: 50px auto 50px auto;
  font-weight: bold;
  font-size: 36px;
  color: rgb(89, 93, 94);
`;

export const InnerText = styled.input`
  width: 70%;
  margin-bottom: 5px;
  height: 35px;
  text-align: left;
  border: 1px solid lightgrey;
  padding-left: 17px;
`;

export const SignButton = styled.button`
  margin-top: 10px;
  margin-bottom: 40px;
  width: 71%;
  height: 33px;
  color: white;
  background-color: rgb(30, 144, 255);
  border: 0;
  transition: background-color 200ms;
  border-radius: 10px;

  &:disabled {
    background-color: rgba(30, 144, 255, 0.3);
  }
  &:active {
    background-color: rgba(30, 144, 255, 0.8);
  }
`;

export const H2 = styled.div`
  margin-top: 40px;
`;

export const H3 = styled.div`
  margin-top: 12px;
`;

export const H4 = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
`;

export const OrChoose = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UnderBox = styled.div`
  width: 350px;
  height: 70px;
  line-height: 70px;
  margin: 20px auto;
  margin-bottom: 100px;
  border: 1px solid lightgrey;
  text-align: center;
  text-decoration: none;
  color: gray;
  background-color: rgb(226 226 226);
`;

// export const LinkText = styled(Link)`
//   text-decoration: none;
//   color: rgb(30, 144, 255);
//   font-weight: bold;
//   &:hover {
//     text-decoration: underline; // 마우스를 올렸을 때 밑줄 추가
//   }
// `;
