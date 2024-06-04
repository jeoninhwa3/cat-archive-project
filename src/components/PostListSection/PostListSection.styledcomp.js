import styled from 'styled-components';

export const PostItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;

  column-gap: 20px;
  padding: 20px;
`;

export const PostItem = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  background-color: blue;
  color: white;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
`;

export const PostImg = styled.div`
  background-color: white;
  width: 90%;
  height: 30px;
`;

export const PostTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const PostTitle = styled.h1`
  color: white;
`;

export const PostContent = styled.p`
  color: white;
`;
