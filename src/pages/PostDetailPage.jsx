import React from 'react';
import Comments from '../detail-components/Comments';
import PostContents from '../detail-components/PostContents';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PostDetailPage = () => {
  const { postId } = useParams(); // 게시글 아이디
  const [posts, setPosts] = useState([]); //게시글 정보
  const [users, setUsers] = useState(); //유저 정보

  //users 테이블 정보 가지고 오기
  useEffect(() => {
    async function getUsers() {
      const { data } = await supabase.from('Users').select('*');
      setUsers(data);
    }

    getUsers();
  }, []);

  //posts 테이블정보 가지고 오기
  useEffect(() => {
    async function getPosts() {
      const { data } = await supabase.from('posts').select('*');
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <>
      <PostContents postId={postId} />
      <Comments postId={postId} users={users} />
    </>
  );
};

export default PostDetailPage;
