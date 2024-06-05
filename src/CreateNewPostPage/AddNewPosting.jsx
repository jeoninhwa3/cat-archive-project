import { useState } from 'react';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const InputContent = styled.input`
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const InputImg = styled.input`
  display: none;
`;

const InputImgLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddNewPosting = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const addHandler = async () => {
    const session = await supabase.auth.getSession();

    if (!title.trim()) {
      alert('제목을 입력하세요');
      return;
    }

    if (!content.trim()) {
      alert('내용을 입력하세요');
      return;
    }

    if (!url.trim() && !url.startsWith('https://')) {
      alert('올바른 URL을 입력하세요');
      return;
    }

    await supabase.from('posts').insert({ title, content, url });

    console.log(session);
    alert('글 저장 완료');
    navigate('/');
  };

  const handleUrlChange = async (files) => {
    setUrl(''); // url 초기화
    const [file] = files;
    if (!file) {
      return;
    }
    const { data } = await supabase.storage.from('url').upload(`url_${Date.now()}.png`, file);
    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/url/${data.path}`);
  };

  return (
    <Container>
      <Header>새 게시글 작성하기</Header>
      <InputField
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <InputContent
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />

      <InputField type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="기다려주세요..." />

      <InputImgLabel htmlFor="file-upload">
        이미지 업로드
        <InputImg id="file-upload" type="file" onChange={(e) => handleUrlChange(e.target.files)} />
      </InputImgLabel>
      <Button onClick={addHandler}>글 추가</Button>
    </Container>
  );
};

export default AddNewPosting;
