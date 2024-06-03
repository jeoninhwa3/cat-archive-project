import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      alert('이메일을 입력해 주세요.');
      return;
    }

    if (!password.trim()) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }

    if (password.length < 8) {
      alert('8자 이상 입력해 주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`회원가입 성공! 당신의 이메일은 ${email} & 비밀번호는 ${password}입니다.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
        <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default App;
