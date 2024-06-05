import styled from 'styled-components';

/* Login Register css (강윤서) */

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const LoginBox = styled.div`
  width: 350px;
  margin: 4% auto auto;
  border: 1px solid lightgrey;
  color: gray;
`;
export const MainLogo = styled.div`
  margin: 50px auto 50px auto;
  font-weight: bold;
  font-size: 40px;
  color: rgb(75, 146, 155);
`;

export const InnerText = styled.div`
  width: 70%;
  margin-bottom: 5px;
  height: 35px;
  text-align: center;
  border: 1px solid lightgrey;
`;

export const SignButton = styled.div`
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

export const Gotoregister = styled.div`
  width: 350px;
  height: 70px;
  line-height: 70px;
  margin: 20px auto;
  border: 1px solid lightgrey;
  text-align: center;
  font-size: 15px;
`;

export const Gotologin = styled.div`
  text-decoration: none;
  color: rgb(30, 144, 255);
`;
