import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import supabase from '../supabaseClient';

const Comments = async () => {
  const [users, setUsers] = useState(); // 유저테이블정보
  const [comments, setComments] = useState(); //댓글테이블 정보
  const session = await supabase.auth.getSession(); //로그인한 유저id
  const { paramsId } = useParams();

  //댓글 데이터 가지고 오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('comments').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
        setComments(data);
      }
    };

    fetchData();
  }, []);

  //유저 데이터 가지고 오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
        setUsers(data);
      }
    };

    fetchData();
  }, []);

  // 댓글생성(C) 댓글테이블에 추가
  async function CreateComments() {
    e.preventDefault();
    const Inputcomments = e.target.value;

    //유저 이름이랑 프로필 이미지 찾기
    const userName = users.find((user) => user.id === session.id);
    const usersImg = users.find((user) => user.id === session.id);

    const { nextComments } = await supabase
      .from('posts')
      .insert({
        id: uuidv4(),
        content: Inputcomments,
        post_id: paramsId,
        user_id: session.id,
        name: userName.name,
        img: usersImg.url
      })
      .select('*');

    setComments((prev) => [...prev, ...nextComments]); //테이블에 추가되면 어차피 가지고올때 가져오는거니까 꼭 추가 안해도되는건지 헷갈림
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

  return (
    <>
      <h2>댓글영역</h2>
      <form onSubmit={CreateComments}>
        <input type="text" value={inputComments} onChange={(e) => setComments(e.target.value)} />
        <button type="submit">댓글등록</button>
      </form>
      <p>댓글 Read</p>
      {filteredComments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.img}
            {comment.name}
            {comment.content}
            <button onClick={handleUpdate(key)}>수정</button>
            <button onClick={handleDelete(key)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
