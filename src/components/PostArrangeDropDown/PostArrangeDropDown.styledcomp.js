import styled from 'styled-components';

export const PostArrangeDropDownContainer = styled.div`
  z-index: 2;
  color: white;
  transition: 0.3s;
`;

export const PostArrangeDropDownTitle = styled.button`
  font-size: 0.9rem;
  border: solid;
  border-width: 0.9pt;
  border-color: #bfbfbf;
  background-color: #bfbfbf;
  padding: 10px 20px;
  border-radius: 10px 10px 0px 0px;
  color: none;
  &:hover {
    cursor: pointer;
  }
  width: 200px;
  text-align: start;
`;

export const DummyDiv = styled.div`
  background-color: yellow;
`;

export const PostArrangeDropDownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 0.9rem;
  border: solid;
  border-width: 0.9pt;
  padding: 10px;
  border-color: #6c6c6c;
  background-color: #6c6c6c;
  border-radius: 0px 0px 10px 10px;
`;

export const PostArrangeDropDownItem = styled.div`
  padding: 10px 10px;
  color: 'white';
  &:hover {
    cursor: pointer;
  }
  z-index: 3;
`;
