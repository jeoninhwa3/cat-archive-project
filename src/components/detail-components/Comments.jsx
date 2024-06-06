import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import styled from 'styled-components';

const StCommentsArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  width: 50vw;
`;

const Comments = ({ postId }) => {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const fetchSessionId = async () => {
      try {
        const {
          data: { session },
          error
        } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setSessionId(session.user.id);
      } catch (error) {
        console.error('Error fetching session ID:', error);
      }
    };

    fetchSessionId();
  }, []); //처음 렌더링 시 로그인 한 유저아이디 찾아서 할당

  return (
    <>
      <StCommentsArea>
        <CommentsForm sessionId={sessionId} postId={postId} />
        <CommentsList sessionId={sessionId} postId={postId} />
      </StCommentsArea>
    </>
  );
};

export default Comments;
