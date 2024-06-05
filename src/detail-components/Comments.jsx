import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../supabaseClient';
import CommentsForm from './CommentsForm';

const Comments = async ({ users, paramsId }) => {
  const [comments, setComments] = useState(); //comments 테이블 정보
  const session = await supabase.auth.getSession(); //로그인한 유저 session 알아내기

  const [inputComments, setInputComments] = useState('');

  //comments 테이블 가지고 오기
  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const { data } = await supabase.from('comments').select('*');
    setComments(data);
  }

  //해당포스트의 댓글찾기 (R할때 쓰임)
  const filteredComments = comments.filter((comment) => comment.post_id === paramsId);

  //댓글수정(U)
  const handleUpdate = async (key) => {
    const updatedContent = prompt('댓글 내용을 수정하세요:', ''); // 새로운 댓글 내용을 입력받음
    if (updatedContent) {
      const { data, error } = await supabase.from('comments').update({ content: updatedContent }).eq('id', key);

      if (error) {
        console.log('Error updating comment:', error);
      } else {
        setComments((prev) =>
          prev.map((comment) => (comment.id === key ? { ...comment, content: updatedContent } : comment))
        );
      }
    }
  };

  //댓글삭제(D)
  const handleDelete = async (key) => {
    const { data, error } = await supabase.from('comments').delete().eq('id', key);

    if (error) {
      console.log('Error deleting comment:', error);
    } else {
      setComments((prev) => prev.filter((comment) => comment.id !== key));
    }
  };

  //comment.created_at로 날짜 정보 가져오기???

  return (
    <>
      <CommentsForm />

      <p>댓글 Read</p>
      {filteredComments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.img}
            {comment.name}
            {comment.content}
            <button onClick={() => handleUpdate(comment.id)}>수정</button>
            <button onClick={() => handleDelete(comment.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
