import '../index.css';
import { useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  if (user) {
    navigate('/');
  }
  return (
    <form onSubmit={handleSubmit} className="logincard">
      <div className="loginbox">
        <h1>갓생챌린지</h1>
        <div>
          <input type="email" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button onClick={signInUser} disabled={!email || !password}>
            로그인
          </button>
        </div>
        <div>―――――― 또는 ――――――</div>
        <h2 className="githublogin">깃헙으로 로그인</h2>
        <h3 className="googlelogin">구글으로 로그인</h3>
        <h4>비밀번호를 잊으셧나요?</h4>
      </div>
      <div className="gotoregister">
        <Link className="gotologin" to="/Register">
          새 계정 만들기
        </Link>
      </div>
    </form>
  );
}

export default LoginPage;
