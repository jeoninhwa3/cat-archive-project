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

const PostListSection = () => {
  const [scrollLoadTargetRef, inView] = useInView();
  const [posts, setPosts] = useState([]);

  const [postCounter, setPostCounter] = useState(0);

  async function getPosts() {
    const { data } = await supabase
      .from('posts')
      .select()
      .range(postCounter, postCounter + 2);
    setPostCounter(postCounter + 2);
    setPosts([...posts, ...data]);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (inView) {
      console.log('데이터요청');
      getPosts();
    }
  }, [inView]);

  return (
    <>
      <PostItemContainer>
        {posts &&
          posts.map((post) => (
            <PostItem key={post.id}>
              <PostImg></PostImg>
              <PostTextSection>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
              </PostTextSection>
            </PostItem>
          ))}
        <div id="observer" style={{ height: '20px', color: 'white' }} ref={scrollLoadTargetRef}>
          옵저버
        </div>
      </PostItemContainer>
    </>
  );
};

export default PostListSection;
