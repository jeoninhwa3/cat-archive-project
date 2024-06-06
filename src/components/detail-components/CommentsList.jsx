import { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';
import styled from 'styled-components';
import defaultImg from '../../assets/defaultImg.jpg';

const StComment = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  width: 100%;

  ul {
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

const StLi = styled.li`
  width: 40vw;
  height: 70px;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #94999d;
  align-items: center;
  justify-content: space-between;

  button {
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10px;
    &:hover {
      background-color: #1c1e1d78;
      cursor: pointer;
    }
  }
`;

const StBtnDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const CommentsList = ({ postId, sessionId }) => {
  const [comments, setComments] = useState([]);

  // 댓글(R) postId에 해당하는 댓글 가져오기
  useEffect(() => {
    const fetchComments = async () => {
      let { data: postedComments } = await supabase.from('comments').select('*').eq('post_id', postId);

      //최신순으로 댓글정렬
      let sortedComments = postedComments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setComments(sortedComments);
    };

    fetchComments();
  }, [comments]);

  // 댓글 수정(U)
  const handleUpdate = async (comment) => {
    //유효성 검사, 로그인한 유저와 댓글유저아이디 비교
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
    //유효성검사, 로그인한 아이디와 댓글을 단 유저아이디 확인
    if (sessionId !== comment.user_id) {
      alert('댓글을 삭제할 권한이 없습니다.');
      return;
    }
    window.confirm('정말로 이 댓글을 삭제하시겠습니까?');

    await supabase.from('comments').delete().eq('id', comment.id);

    // 상태 업데이트하여 리렌더링
    setComments(comments.filter((c) => c.id !== comment.id));
  };

  return (
    <StComment>
      <ul>
        {comments.map((comment) => (
          <StLi key={comment.id}>
            <div>
              <img src={comment.img ? comment.img : defaultImg} alt="유저사진" />
              <p>{comment.name}</p>
            </div>
            <p style={{ width: '25vw', display: 'flex', textAlign: 'start', marginLeft: '5px' }}>{comment.content}</p>
            <StBtnDiv>
              <button onClick={() => handleUpdate(comment)}>수정</button>
              <button onClick={() => handleDelete(comment)}>삭제</button>
            </StBtnDiv>
          </StLi>
        ))}
      </ul>
    </StComment>
  );
};

export default CommentsList;
