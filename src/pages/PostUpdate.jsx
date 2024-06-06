import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

// styled-component
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
const Header = styled.header`
  width: 100%;

  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 900;
`;
const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;
const InputContent = styled.input`
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const StButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #0056b3;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const PostUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState();
  const [title, settitle] = useState();
  const [content, setContent] = useState();
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select().eq('id', id);
      setPost(data[0]);
      settitle(data[0].title);
      setContent(data[0].content);
    };
    fetchData();
  }, []);

  console.log(post);

  const handleUrlChange = async (files) => {
    const [file] = files;
    if (!file) {
      return;
    }
    const { data } = await supabase.storage.from('posts').upload(`avatar_${Date.now()}.png`, file);
    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/posts/${data.path}`);
  };
  console.log(url);

  // 게시글 수정
  const editPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .update({
        title,
        content,
        url
      })
      .eq('id', id)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      alert('글 수정 완료');
      navigate(-1);
    }
  };

  // 게시글 삭제
  const deletePost = async () => {
    const { data } = await supabase.from('posts').delete().eq('id', id).select();
    alert('글 삭제 완료');
    navigate(-1);
  };

  return (
    <Container>
      <Header>게시글 수정하기</Header>
      <InputField
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <InputContent
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />

      <InputField id="file-upload" type="file" onChange={(e) => handleUrlChange(e.target.files)} />
      <StButton onClick={editPost} type="submit">
        수정
      </StButton>
      <StButton onClick={deletePost} type="submit">
        삭제
      </StButton>
      <StButton
        onClick={() => {
          navigate(-1);
        }}
        type="submit"
      >
        뒤로가기
      </StButton>
    </Container>
  );
};

export default PostUpdate;
