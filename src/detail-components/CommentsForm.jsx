import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import supabase from '../supabaseClient'; // supabase 임포트

const CommentsForm = ({ sessionId, postId }) => {
  const [inputComments, setInputComments] = useState('');

  // 댓글 생성(C) 댓글테이블에 추가
  const createComment = async (e) => {
    e.preventDefault();
    // 기본 제출 동작 막기

    //유저 이름이랑 프로필 이미지 찾기
    let { data: users } = await supabase.from('users').select('*').eq('id', sessionId); // sessionId로 유저 정보 가져오기
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
  };

  return (
    <>
      <form onSubmit={createComment}>
        <input type="text" value={inputComments} onChange={(e) => setInputComments(e.target.value)} />
        <button type="submit">댓글등록</button>
      </form>
    </>
  );
};

export default CommentsForm;
