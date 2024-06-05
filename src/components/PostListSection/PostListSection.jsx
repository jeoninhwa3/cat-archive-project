import supabase from '../../supabaseClient';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  PostContent,
  PostImg,
  PostItem,
  PostItemContainer,
  PostTextSection,
  PostTitle
} from './PostListSection.styledcomp';
import { useNavigate } from 'react-router-dom';

const PostListSection = () => {
  const [scrollLoadTargetRef, scrollLoadTargetRefInView] = useInView();
  const [posts, setPosts] = useState([]);
  const [postCounter, setPostCounter] = useState(0);
  const navigate = useNavigate();

  const getPosts = async () => {
    const { data } = await supabase
      .from('posts')
      .select()
      .range(postCounter, postCounter + 0);
    setPostCounter(postCounter + 1);
    setPosts([...posts, ...data]);
  };

  const handleClickPostItem = (destination) => {
    navigate(`/post/${destination}`);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (scrollLoadTargetRefInView) {
      console.log('데이터요청');
      getPosts();
    }
  }, [scrollLoadTargetRefInView]);

  return (
    <>
      <PostItemContainer>
        {posts &&
          posts.map((post) => (
            <PostItem key={post.id} onClick={handleClickPostItem(post.id)}>
              <PostImg imgUrl={post.url ? `${post.url}` : `../../assets/temp_logo.png`}></PostImg>
              <PostTextSection>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
              </PostTextSection>
            </PostItem>
          ))}
        <div id="observer" style={{ height: '20px', color: 'white' }} ref={scrollLoadTargetRef}></div>
      </PostItemContainer>
    </>
  );
};

export default PostListSection;
