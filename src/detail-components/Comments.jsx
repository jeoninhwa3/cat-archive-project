import supabase from '../supabaseClient';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import styled from 'styled-components';

const StCommentsDiv = styled.div`
  background-color: aliceblue;
`;

const Comments = async ({ postId }) => {
  //로그인한 유저 id 알아내기
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const sessionId = session.user.id;

  return (
    <>
      <StCommentsDiv>
        <CommentsForm sessionId={sessionId} postId={postId} />
        <CommentsList sessionId={sessionId} postId={postId} />
      </StCommentsDiv>
    </>
  );
};

export default Comments;
