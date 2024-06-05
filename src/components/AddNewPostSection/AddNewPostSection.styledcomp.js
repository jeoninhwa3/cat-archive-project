import styled from 'styled-components';

export const AddNewPostBtnContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const AddNewPostBtn = styled.div`
  display: flex;
  gap: 10px;
  color: #bfbfbf;
  justify-content: center;
  align-items: center;
  height: 60%;
  padding: 0px 120px;
  border-radius: 15px;
  border: 3pt dashed;

  border-color: #bfbfbf;

  transition: 0.3s;
  &:hover {
    background-color: #2c2c2e;
    cursor: pointer;
    transition: 0.3s;
  }
`;
