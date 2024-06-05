import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import styled from 'styled-components';

const StCommentsDiv = styled.div`
  background-color: aliceblue;
`;

const Comments = ({ postId }) => {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        // 로그인한 유저 id 알아내기
        const {
          data: { session }
        } = await supabase.auth.getSession();
        if (session) {
          setSessionId(session.user.id);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StCommentsDiv>
      <CommentsForm sessionId={sessionId} postId={postId} />
      <CommentsList sessionId={sessionId} postId={postId} />
    </StCommentsDiv>
  );
};

export default Comments;
