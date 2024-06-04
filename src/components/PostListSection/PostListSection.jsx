import supabase from '../../supabaseClient';
import { useEffect, useState } from 'react';
import {
  PostContent,
  PostImg,
  PostItem,
  PostItemContainer,
  PostTextSection,
  PostTitle
} from './PostListSection.styledcomp';

const PostListSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
    console.log(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select();
    setPosts(data);
  }
  console.log(posts);
  return (
    <>
      <PostItemContainer>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostImg></PostImg>
            <PostTextSection>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
            </PostTextSection>
          </PostItem>
        ))}
      </PostItemContainer>
    </>
  );
};

export default PostListSection;
