import { useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import {
  LoginCard,
  LoginBox,
  MainLogo,
  InnerText,
  SignButton,
  H2,
  H3,
  H4,
  Gotoregister,
  Gotologin
} from '../components/loginstyled.jsx';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    signInUser();
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <LoginCard onSubmit={handleSubmit}>
      <LoginBox>
        <MainLogo>갓생챌린지</MainLogo>

        <InnerText>
          <input type="email" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmailChange} />
        </InnerText>

        <InnerText>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
          />
        </InnerText>

        <SignButton onClick={signInUser} disabled={!email || !password}>
          로그인
        </SignButton>

        <div>―――――― 또는 ――――――</div>

        <H2>깃헙으로 로그인</H2>

        <H3>구글으로 로그인</H3>

        <H4>비밀번호를 잊으셧나요?</H4>
      </LoginBox>

      <Gotoregister>
        <Link to="/Register">
          <Gotologin>새 계정 만들기</Gotologin>
        </Link>
      </Gotoregister>
    </LoginCard>
  );
}

export default LoginPage;
