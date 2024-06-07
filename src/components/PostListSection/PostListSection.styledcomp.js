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
  min-width: 100px;
`;

export const PostItemContainer = styled.div`
  display: grid;

  row-gap: 40px;
  column-gap: 40px;
  margin: 40px 0px;
  width: 87.5%;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const PostItem = styled.div`
  z-index: 1;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  background-color: rgb(51, 52, 59);
  color: white;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const PostImg = styled.div`
  /* background-image: url(${({ imgUrl }) => imgUrl};); */
  background-image: url(${(props) => (props.$imgUrl ? props.$imgUrl : img)});
  background-size: cover;
  background-position: center;
  background-color: white;
  width: 90%;
  height: 400px;
`;

export const PostTextSection = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  align-items: start;
  width: 90%;
  gap: 10px;
`;

export const PostTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
  font-weight: 900;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

export const PostContent = styled.p`
  color: #adacac;
  font-size: 1rem;

  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 50px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const PostTime = styled.p`
  color: #8f8f8f;
  font-size: 0.8rem;
`;
