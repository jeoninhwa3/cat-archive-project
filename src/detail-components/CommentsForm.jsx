import React from 'react';
import styled from 'styled-components';

const StForm = styled.form`
  height: 50px;
  display: flex;
  gap: 2px;
  input {
    width: 70%;
    height: 25px;
  }
  button {
    height: 30px;
  }
`;

const CommentsForm = ({ sessionId, postId }) => {
  const [inputComments, setInputComments] = useState('');

  // 댓글생성(C) 댓글테이블에 추가
  async function CreateComments() {
    e.preventDefault();
    setInputComments(e.target.value);

    //유저 이름이랑 프로필 이미지 찾기
    let { data: users } = await supabase.from('users').select('sessionId');
    const userName = users[0].name;
    const usersImg = users[0].url;

    //댓글테이블에 인풋 정보 추가
    await supabase
      .from('comments')
      .insert({
        content: inputComments,
        post_id: postId,
        user_id: sessionId,
        name: userName,
        img: usersImg
      })
      .select('*');

    setInputComments('');
  }

  return (
    <>
      <StForm onSubmit={CreateComments}>
        <input type="text" value={inputComments} onChange={(e) => setInputComments(e.target.value)} />
        <button type="submit">댓글등록</button>
      </StForm>
    </>
  );
};

export default CommentsForm;
