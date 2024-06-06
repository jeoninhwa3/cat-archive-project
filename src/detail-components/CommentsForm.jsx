import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import supabase from '../supabaseClient';

const StForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTextArea = styled.textarea`
  width: 40vw;
  height: 8vh;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  resize: none;
  box-sizing: border-box;

  &:focus {
    border-color: #1b1f22;
    box-shadow: 0 0 5px rgba(77, 79, 81, 0.5);
    outline: none;
  }
`;

const StButton = styled.button`
  margin-top: 17px;
  margin-left: 460px;
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
`;

const CommentsForm = ({ sessionId, postId }) => {
  const [inputComments, setInputComments] = useState('');

  // 댓글 생성(C) 댓글테이블에 추가
  const createComment = async (e) => {
    e.preventDefault();

    let { data: users } = await supabase.from('users').select('*').eq('id', sessionId);

    const userName = users[0].name;
    const usersImg = users[0].url;

    await supabase.from('comments').insert({
      content: inputComments,
      post_id: postId,
      user_id: sessionId,
      name: userName,
      img: usersImg
    });

    setInputComments('');
  };

  return (
    <>
      <StForm onSubmit={createComment}>
        <StTextArea
          rows="3"
          cols="50"
          placeholder="댓글을 등록하세요"
          value={inputComments}
          onChange={(e) => setInputComments(e.target.value)}
        />
        <StButton type="submit">등록</StButton>
      </StForm>
    </>
  );
};

export default CommentsForm;
