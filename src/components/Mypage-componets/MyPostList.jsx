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
  height: 210px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 2px 3px 10px #eee;
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
  font-size: 24px;
  font-weight: 700;
`;
const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 0px;
`;
const StTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
const StButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const MyPostList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="mypost_wrap">
      <StTit>내가 올린 고양이들</StTit>
      <StUl>
        {posts &&
          posts.map((el, idx) => {
            return (
              <StLi key={idx}>
                <StImg
                  src={el.url}
                  onClick={() => {
                    navigate(`/post/${el.id}`);
                  }}
                />

                <StBox>
                  <StTitle
                    onClick={() => {
                      navigate(`/post/${el.id}`);
                    }}
                  >
                    {el.title}
                  </StTitle>
                  <StButton
                    onClick={() => {
                      navigate(`/PostUpdate/${el.id}`);
                    }}
                  >
                    <span className="material-symbols-outlined">settings</span>
                  </StButton>
                </StBox>
              </StLi>
            );
          })}
      </StUl>
    </div>
  );
};

export default MyPostList;
