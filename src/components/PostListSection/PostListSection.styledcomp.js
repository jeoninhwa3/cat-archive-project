import styled from 'styled-components';
import img from '../../assets/temp_logo.png';

export const PostHeader = styled.div`
  margin: 20px 120px 0px 120px;
  display: flex;

  justify-content: space-between;

  height: 40px;
`;

export const PostItemsTitle = styled.h1`
  margin-top: 10px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
`;

export const PostItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  column-gap: 20px;
  padding: 20px 120px;
`;

export const PostItem = styled.div`
  z-index: 1;
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
  /* background-image: url(${({ imgUrl }) => imgUrl};); */
  background-image: url(${(props) => (props.$imgUrl ? props.$imgUrl : img)});
  background-size: cover;
  background-position: center;
  background-color: white;
  width: 90%;
  height: 600px;
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
