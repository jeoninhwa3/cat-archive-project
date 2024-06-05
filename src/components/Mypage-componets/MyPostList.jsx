// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
// import supabase from '../supabaseClient';

// styled-components
const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const StLi = styled.li`
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #eee;
`;
const StImg = styled.img`
  width: 300px;
  height: 170px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: none;
  outline: none;
  object-fit: cover;
`;
const StTit = styled.h2`
  margin-bottom: 30px;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;
const StTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
`;

const MyPostList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="mypost_wrap">
      <StTit>내 게시글 보기</StTit>
      <StUl>
        {posts &&
          posts.map((el, idx) => {
            return (
              <StLi
                key={idx}
                onClick={() => {
                  navigate(`/PostUpdate/${el.id}`);
                }}
              >
                <StImg src={el.url} alt="" />
                <StTitle>{el.title}</StTitle>
                {/* <p>{user.id}</p> */}
              </StLi>
            );
          })}
      </StUl>
    </div>
  );
};

export default MyPostList;
