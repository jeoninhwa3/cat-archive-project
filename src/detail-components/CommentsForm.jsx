import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import supabase from '../supabaseClient'; // supabase 임포트

const CommentsForm = ({ sessionId, postId }) => {
  const [inputComments, setInputComments] = useState('');

  // 댓글 생성(C) 댓글테이블에 추가
  const createComment = async (e) => {
    e.preventDefault();
    try {
      let { data: users, error: userError } = await supabase.from('users').select('*').eq('id', sessionId);
      if (userError) {
        console.error('사용자 조회 오류:', userError);
        return;
      }

      const userName = users[0].name;
      const usersImg = users[0].url;

      const { data: commentData, error: insertError } = await supabase.from('comments').insert({
        content: inputComments,
        post_id: postId,
        user_id: sessionId,
        name: userName,
        img: usersImg
      });

      if (insertError) {
        console.error('댓글 삽입 오류:', insertError);
        return;
      }

      console.log('삽입된 댓글:', commentData);
      setInputComments('');
    } catch (error) {
      console.error('댓글 생성 중 예외 발생:', error);
    }
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
