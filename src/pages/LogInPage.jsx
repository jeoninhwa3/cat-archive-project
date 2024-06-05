import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

import {
  MainStation,
  UpperBox,
  MainLogo,
  InnerText,
  SignButton,
  H2,
  H3,
  H4,
  UnderBox,
  LinkText
} from '../components/Login-componets/LoginStyled';
import { useDispatch } from 'react-redux';
import { SET_IS_LOGGED_IN } from '../redux/modules/newsFeed';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signInUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log('signin: ', { data, error });
    if (error) {
      alert('이메일과 비밀번호를 다시 입력해 주세요.');
    }
    setUser(data.user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      alert('이메일을 다시 입력해 주세요.');
      return;
    }
    if (!password.trim()) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }
  };

  useEffect(() => {
    if (user) {
      dispatch(SET_IS_LOGGED_IN(true));
      navigate('/');
    }
  }, [user]);

  return (
    <MainStation onSubmit={handleSubmit}>
      <UpperBox>
        <MainLogo>갓생챌린지</MainLogo>

        <InnerText type="email" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmailChange} />

        <InnerText
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
        />

        <SignButton onClick={signInUser} disabled={!email || !password}>
          로그인
        </SignButton>

        <div>―――――― 또는 ――――――</div>

        <H2>깃헙으로 로그인</H2>

        <H3>구글으로 로그인</H3>

        <H4>비밀번호를 잊으셧나요?</H4>
      </UpperBox>

      <UnderBox>
        <LinkText to="/Register">새 계정 만들기</LinkText>
      </UnderBox>
    </MainStation>
  );
}

export default LoginPage;
