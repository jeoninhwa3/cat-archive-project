import styled from 'styled-components';

export const AddNewPostBtnContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const AddNewPostBtn = styled.div`
  display: flex;
  gap: 10px;
  color: #bfbfbf;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding: 5px 360px;
  border-radius: 15px;
  border: 3pt dashed;
  min-width: 10px;
  border-color: #bfbfbf;

  transition: 0.3s;
  &:hover {
    background-color: #2c2c2e;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const AddNewPostText = styled.p`
  min-width: 90px;
`;
