import { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';
import styled from 'styled-components';
import defaultImg from '../../assets/defaultImg.jpg';

const StTitle = styled.div`
  margin-top: 55px;
  font-size: 46px;
  font-weight: bold;
`;
const StUser = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  span {
    opacity: 0.5;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80%;
  padding: 20px;
  /* margin-bottom: 240px; */
  img {
    margin-top: 40px;
    margin-bottom: 10px;
    width: 550px;
    height: 500px;
    object-fit: contain;
  }
`;

//게시글(R)
const PostContents = ({ postId }) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      //파람스 아이디에 해당하는 게시물 가져오기
      let { data: posts } = await supabase.from('posts').select('*').eq('id', postId);
      let post = posts[0];
      setPost(post);

      //게시물 쓴 유저찾기
      let { data: users } = await supabase.from('users').select('*').eq('id', post.user_id);
      let user = users[0];
      setUser(user);

      // created_at 문자열을 Date 객체로 변환
      const createdAtDate = new Date(post.created_at);

      // 년, 월, 일 추출
      const year = createdAtDate.getFullYear(); // 년도
      const month = createdAtDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)
      const day = createdAtDate.getDate(); // 일

      // 년월일 형식으로 조합
      const formattedDate = `${year}년 ${month}월 ${day}일`;
      setFormattedDate(formattedDate);
    };

    fetchPostData();
  }, []);

  return (
    <>
      <StTitle>{post.title}</StTitle>

      <StUser>
        <img src={user.url ? user.url : defaultImg} alt="유저사진" />
        <p>{user.name}</p>
        <span>{formattedDate}</span>
      </StUser>

      <StContent>
        <hr />
        {post.url && <img src={post.url} style={{ width: '80%', height: '80%' }} alt="게시글 이미지" />}
        <p>{post.content}</p>
      </StContent>
    </>
  );
};

export default PostContents;
