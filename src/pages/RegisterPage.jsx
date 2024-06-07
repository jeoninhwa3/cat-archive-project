import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import {
  MainStation,
  UpperBox,
  MainLogo,
  InnerText,
  SignButton,
  H2,
  H3,
  OrChoose,
  UnderBox
} from '../components/Login-componets/LoginStyled';
import { useDispatch } from 'react-redux';
import { SET_IS_LOGGED_IN } from '../redux/modules/newsFeed';
import './login.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      name,
      password
    });
    console.log('signup data => ', data);
    const { data: usersData, error: userInsertError } = await supabase.from('users').insert({
      id: data.user.id,
      email,
      name,
      password
    });
    console.log('signup: ', { data, error });
    console.log('usersdata: ', { usersData, userInsertError });
    setUser(data.user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      alert('이메일을 입력해 주세요.');
      return;
    }
    if (!name.trim()) {
      alert('이름을 입력해 주세요.');
      return;
    }
    if (!password.trim()) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }
    if (password.length < 8) {
      alert('비밀번호를 8자 이상 입력해 주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    signUpNewUser();
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
        <MainLogo>고양이 아카이브</MainLogo>
        <H2>깃헙으로 로그인</H2>
        <H3>구글으로 로그인</H3>
        <OrChoose>―――――― 또는 ――――――</OrChoose>
        <InnerText type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
        <InnerText type="name" placeholder="이름" value={name} onChange={handleNameChange} />
        <InnerText type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        <InnerText
          type="password"
          placeholder="  비밀번호 확인"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        <SignButton type="submit">가입</SignButton>
      </UpperBox>
      <UnderBox>
        계정이 있으신가요?
        <Link className="link" to="/logIn">
          로그인
        </Link>
      </UnderBox>
    </MainStation>
  );
}
export default RegisterPage;
