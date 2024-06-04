import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

function PostContents() {
  const { paramsId } = useParams(); //페이지id
  const [posts, setPosts] = useState([]); //게시글정보
  const [users, setUsers] = useState(); //유저정보

  //유저 테이블 정보 가지고 오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
        setUsers(data);
      }
    };

    fetchData();
  }, []);

  //게시물 테이블정보 가지고 오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.log('error => ', error);
      } else {
        console.log('data => ', data);
        setPosts(data);
      }
    };

    fetchData();
  }, []);

  //게시글 찾기
  const clikckedPost = posts.find((post) => post.id === paramsId);
  //게시글 쓴사람 유저정보찾기
  const writer = users.find((user) => user.id === clikckedPost.user_id);

  return (
    <>
      <h3>글쓴사람정보</h3>
      <div>
        <img src={writer.url} alt="유저사진" />
        {writer.name}
      </div>

      <h3>게시글</h3>
      <div>
        <h5>제목 : {clikckedPost.title}</h5>
        <h5>내용: {clikckedPost.content}</h5>
        <img src={clikckedPost.url} alt="게시글 이미지" />
      </div>
    </>
  );
}
export default PostContents;
