import '../index.css';
import { useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
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
      username,
      password
    });

    const { data: usersData, error: userInsertError } = await supabase.from('users').insert({
      id: data.user.id,
      email,
      username,
      password
    });

    console.log('signup: ', { data, error });
    console.log('usersdata: ', { usersData, userInsertError });
    setUser(data.user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      alert('이메일을 다시 입력해 주세요.');
      return;
    }

    if (!username.trim()) {
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
      navigate('/');
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit} className="logincard">
      <div className="loginbox">
        <h1>갓생챌린지</h1>
        <h2 className="githublogin">깃헙으로 로그인</h2>
        <h3 className="googlelogin">구글으로 로그인</h3>
        <div className="orchoose">―――――― 또는 ――――――</div>

        <div>
          <input type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <input type="username" placeholder="이름" value={username} onChange={handleUserNameChange} />
        </div>
        <div>
          <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
        </div>
        <button type="submit">가입</button>
      </div>

      <div className="gotoregister">
        계정이 있으신가요?
        <Link className="gotologin" to="/logIn" color="blue">
          로그인
        </Link>
      </div>
    </form>
  );
}

export default RegisterPage;
