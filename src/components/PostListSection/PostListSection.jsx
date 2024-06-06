import supabase from '../../supabaseClient';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  PostContent,
  PostHeader,
  PostImg,
  PostItem,
  PostItemContainer,
  PostItemsTitle,
  PostTextSection,
  PostTime,
  PostTitle
} from './PostListSection.styledcomp';
import { useNavigate } from 'react-router-dom';
import PostArrangeDropDown from '../PostArrangeDropDown/PostArrangeDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_POSTS, SET_POSTS } from '../../redux/modules/newsFeed';

const PostListSection = () => {
  const [scrollLoadTargetRef, scrollLoadTargetRefInView] = useInView();

  const navigate = useNavigate();

  const postCounter = useSelector((state) => {
    return state.newsFeed.postsCounter;
  });

  const posts = useSelector((state) => {
    return state.newsFeed.posts;
  });

  const postsArrangeType = useSelector((state) => {
    return state.newsFeed.postsArrangeType;
  });

  const dispatch = useDispatch();

  const getPosts = async () => {
    if (postsArrangeType == 'latest') {
      const { data } = await supabase
        .from('posts')
        .select()
        .range(postCounter, postCounter + 2)
        .order('created_at', { ascending: false });
      dispatch(COUNT_POSTS(3));
      dispatch(SET_POSTS([...posts, ...data]));
    } else {
      const { data } = await supabase
        .from('posts')
        .select()
        .range(postCounter, postCounter + 2)
        .order('created_at', { ascending: true });
      dispatch(COUNT_POSTS(3));
      dispatch(SET_POSTS([...posts, ...data]));
    }
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
      <PostHeader>
        <PostItemsTitle>고양이 모아보기</PostItemsTitle>
        <PostArrangeDropDown></PostArrangeDropDown>
      </PostHeader>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PostItemContainer>
          {posts &&
            posts.map((post) => (
              <PostItem
                onClick={() => {
                  handleClickPostItem(post.id);
                }}
                key={post.id}
              >
                <PostImg $imgUrl={post.url ? `${post.url}` : `../../assets/temp_logo.png`}></PostImg>
                <PostTextSection>
                  <PostTitle>{post.title}</PostTitle>
                  <PostContent>{post.content}</PostContent>
                  <PostTime>
                    {post.created_at}
                    {/* {` ${post.created_at.slice(0, 10)} ${post.created_at.slice(11, 13)}:${post.created_at.slice(
                      14,
                      16
                    )}`} */}
                  </PostTime>
                </PostTextSection>
              </PostItem>
            ))}
          <div
            id="observer"
            style={{ marginTop: '100px', height: '20px', color: 'white' }}
            ref={scrollLoadTargetRef}
          ></div>
        </PostItemContainer>
      </div>
    </>
  );
};

export default PostListSection;
