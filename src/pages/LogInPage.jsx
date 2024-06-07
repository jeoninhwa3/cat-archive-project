import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import './login.css';
import {
  MainStation,
  UpperBox,
  MainLogo,
  InnerText,
  SignButton,
  H2,
  H3,
  H4,
  UnderBox
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

  const checkLogInStatus = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    // 접속한 사용자가 로그인상태라면 user가 잘 반환되고,
    // 로그인하지 않았다면 user가 잘 반환되지 않음
    if (user) {
      dispatch(SET_IS_LOGGED_IN(true));
    } else {
      dispatch(SET_IS_LOGGED_IN(false));
    }
  };
  useEffect(() => {
    checkLogInStatus();

    if (user) {
      dispatch(SET_IS_LOGGED_IN(true));
      navigate('/');
    }
  }, [user]);

  return (
    <MainStation onSubmit={handleSubmit}>
      <UpperBox>
        <MainLogo>고양이 아카이브</MainLogo>

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
        <Link className="link" to="/Register">
          새 계정 만들기
        </Link>
      </UnderBox>
    </MainStation>
  );
}

export default LoginPage;
