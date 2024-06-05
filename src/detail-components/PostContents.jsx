import React from 'react';
import supabase from '../supabaseClient';

const PostContents = async ({ postId }) => {
  //파람스 아이디에 해당하는 게시물 가져오기
  let { data: posts } = await supabase.from('posts').select('*').eq('id', postId);
  let post = posts[0];

  //게시물 쓴 유저의 프로필과 이름 가져오기
  let { data: users } = await supabase.from('users').select('*').eq('id', post.user_id);
  let user = users[0];

  // created_at 문자열을 Date 객체로 변환
  const createdAtDate = new Date(post.created_at);

  // 년, 월, 일 추출
  const year = createdAtDate.getFullYear(); // 년도
  const month = createdAtDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)
  const day = createdAtDate.getDate(); // 일

  // 년월일 형식으로 조합
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <img src={post.url} alt="게시글 이미지" />
        <p>{post.content}</p>
      </div>

      <div>
        <img src={user.url} alt="유저사진" />
        <p>{user.name}</p>
        <p>{formattedDate}</p>
      </div>
    </>
  );
};
export default PostContents;
