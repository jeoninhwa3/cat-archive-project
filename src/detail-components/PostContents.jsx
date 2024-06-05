import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';

const StTitle = styled.div`
  width: 60%;
  height: 40%;
  margin-bottom: 0;
`;

const StUser = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

const StProfile = styled.div`
  display: flex;
`;

const StPosts = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 400px;
    object-fit: cover;
  }
`;

const PostContents = ({ postId }) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        //파람스 아이디에 해당하는 게시물 가져오기
        let { data: posts } = await supabase.from('posts').select('*').eq('id', postId);
        let post = posts[0];
        setPost(post);

        //게시물 쓴 유저의 프로필과 이름 가져오기
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
      } catch (error) {
        console.error('에러에러:', error);
      }
    };

    fetchPostData();
  }, [postId]);

  if (!post || !user || !formattedDate) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  return (
    <>
      <StTitle>
        <h1>{post.title}</h1>
        <StUser>
          <StProfile>
            <img src={user.url} alt="유저사진" />
            <p>{user.name}</p>
          </StProfile>
          <p>{formattedDate}</p>
        </StUser>
      </StTitle>
      <hr />
      <StPosts>
        <img src={post.url} alt="게시글 이미지" />
        <p>{post.content}</p>
      </StPosts>
    </>
  );
};

export default PostContents;
