import { useEffect, useState } from 'react';
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
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
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
  cursor: pointer;
`;
const InputContent = styled.input`
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddNewPosting = () => {
  const [postings, setPostings] = useState([]);
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select();
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setPostings(data);
      }
    };
    fetchData();
  }, []);

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

    if (!url.trim()) {
      alert('url을 입력하세요');
      return;
    }

    await supabase.from('posts').insert({ title, content, url });

    console.log(session);
    alert('글 저장 완료');
    navigate('/');
  };
  const handleUrlChange = async (files) => {
    const [file] = files;
    if (!file) {
      return;
    }
    const { data } = await supabase.storage.from('url').upload(`url_${Date.now()}.png`, file);
    setUrl(`https://uvvzyeuostwqkcufncyy.supabase.co/storage/v1/object/public/url/${data.path}`);
  };
  return (
    <Container>
      <Header>CreateNewPostPage</Header>
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

      <Button onClick={addHandler}>글추가</Button>
    </Container>
  );
};

export default AddNewPosting;
