import { useNavigate } from 'react-router-dom';
import { AddNewPostBtnContainer, AddNewPostBtn, AddNewPostText } from './AddNewPostSection.styledcomp';

const AddNewPostSection = () => {
  const navigate = useNavigate();
  return (
    <AddNewPostBtnContainer>
      <AddNewPostBtn
        onClick={() => {
          navigate('/createNewPost');
        }}
      >
        {/* <img src="src\assets\add_icon.png" style={{ height: '20px', opacity: '0.7' }} /> */}
        <AddNewPostText>새 고양이 등록하기</AddNewPostText>
      </AddNewPostBtn>
    </AddNewPostBtnContainer>
  );
};

export default AddNewPostSection;
