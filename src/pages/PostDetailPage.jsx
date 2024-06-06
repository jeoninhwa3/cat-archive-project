import Comments from '../detail-components/Comments';
import PostContents from '../detail-components/PostContents';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StDetail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 87vw;
  margin: 0 auto;
  padding: 50px;
`;

const PostDetailPage = () => {
  const { post_id } = useParams(); // 게시글 아이디
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <>
      <StDetail>
        <PostContents postId={post_id} />
        <Comments postId={post_id} />
      </StDetail>
    </>
  );
};

export default PostDetailPage;
