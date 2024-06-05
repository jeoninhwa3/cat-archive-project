import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

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

    fetchSessionId(); // sessionId를 인자로 전달할 필요 없음
  }, []); // 빈 의존성 배열을 사용하여 한 번만 실행되도록 함

  console.log(sessionId);
  return (
    <>
      <CommentsForm sessionId={sessionId} postId={postId} />
      <CommentsList sessionId={sessionId} postId={postId} />
    </>
  );
};

export default Comments;
