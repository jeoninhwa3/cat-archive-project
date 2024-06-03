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

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const signInUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log('signin: ', { data, error });
    setUser(data.user);
  };
  if (user) {
    navigate('/');
  }
  if (!user) {
    return (
      <form>
        <input type="text" placeholder="이메일" value={email} onChange={onChangeEmail} />
        <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        <button onClick={signInUser}>로그인</button>

        <div>
          <Link to="/Register">새 계정 만들기</Link>
        </div>
      </form>
    );
  }
}

export default LoginPage;
