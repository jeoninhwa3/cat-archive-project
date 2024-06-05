import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';

const StComments = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  li {
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CommentsList = ({ postId, sessionId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // postId에 해당하는 댓글 가져오기
    const fetchComments = async () => {
      let { data: comments, error } = await supabase.from('comments').select('*').eq('post_id', postId);
      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        let sortedComments = comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setComments(sortedComments);
      }
    };

    fetchComments();
  }, [postId]);

  // 댓글 수정(U)
  const handleUpdate = async (comment) => {
    if (sessionId !== comment.user_id) {
      alert('댓글을 수정할 권한이 없습니다.');
      return;
    }

    const updatedContent = prompt('댓글 내용을 수정하세요:', comment.content); // 새로운 댓글 내용을 입력받음
    if (updatedContent) {
      const { data, error } = await supabase.from('comments').update({ content: updatedContent }).eq('id', comment.id);
      if (error) {
        console.error('Error updating comment:', error);
      } else {
        // 상태 업데이트하여 리렌더링
        setComments(comments.map((c) => (c.id === comment.id ? { ...c, content: updatedContent } : c)));
      }
    }
  };

  // 댓글 삭제(D)
  const handleDelete = async (comment) => {
    if (sessionId !== comment.user_id) {
      alert('댓글을 삭제할 권한이 없습니다.');
      return;
    }

    const { data, error } = await supabase.from('comments').delete().eq('id', comment.id);
    if (error) {
      console.error('Error deleting comment:', error);
    } else {
      // 상태 업데이트하여 리렌더링
      setComments(comments.filter((c) => c.id !== comment.id));
    }
  };

  return (
    <>
      <StComments>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <img src={comment.img} alt="유저사진" />
              <p>{comment.name}</p>
              <p>{comment.content}</p>
              <button onClick={() => handleUpdate(comment)}>수정</button>
              <button onClick={() => handleDelete(comment)}>삭제</button>
            </li>
          ))}
        </ul>
      </StComments>
    </>
  );
};

export default CommentsList;
