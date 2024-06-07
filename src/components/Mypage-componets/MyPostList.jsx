import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// styled-components
const StContainer = styled.div`
  width: calc(100% - 330px);
`;
const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-width: 700px;
`;
const StLi = styled.li`
  display: flex;
  min-width: 600px;
  height: 150px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ddd;
`;
const StImg = styled.img`
  width: 250px;
  height: 100%;
  border-radius: 10px;
  border: none;
  margin-right: 20px;
  outline: none;
  object-fit: cover;
  cursor: pointer;
`;
const StTit = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;
const StText = styled.p`
  display: inline-block;
  margin-left: 10px;
  color: #ddd;
  font-size: 14px;
  font-weight: 700;
`;
const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 170px);
`;
const StTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #ddd;
`;
const StContent = styled.p`
  width: 90;
  font-size: 16px;
  color: #ddd;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const StButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  color: #ddd;
  cursor: pointer;
`;

const MyPostList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <StContainer>
      <StTit>
        내가 올린 고양이
        <StText>이미지를 클릭하면 상세 페이지로 이동해요!</StText>
      </StTit>
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
                  <div>
                    <StTitle>{el.title}</StTitle>
                    <StContent>{el.content}</StContent>
                  </div>
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
    </StContainer>
  );
};

export default MyPostList;
