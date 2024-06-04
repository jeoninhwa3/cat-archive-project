import { useEffect, useState } from 'react';
// import dummy from '../dummy.json';
import styled from 'styled-components';
import { getData } from '../api/posts';

// styled-components
const StUl = styled.ul`
  display: flex;
`;
const StLi = styled.li`
  border: 1px solid #000;
`;
const StImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const StTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
`;

const MyPostList = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getData()
      //성공 시
      .then((data) => {
        setPosts(data);
      })
      //실패 시
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mypost_wrap">
      <h2 className="mypage_title">내 게시글 보기</h2>
      <StUl>
        {posts.map((el, idx) => {
          return (
            <StLi key={idx}>
              <StImg src={el.img} alt="" />
              <StTitle>{el.title}</StTitle>
              {/* <p>{el.content}</p> */}
            </StLi>
          );
        })}
      </StUl>
    </div>
  );
};

export default MyPostList;
