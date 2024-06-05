import { useNavigate } from 'react-router-dom';
import { AddNewPostBtnContainer, AddNewPostBtn } from './AddNewPostSection.styledcomp';

const AddNewPostSection = () => {
  const navigate = useNavigate();
  return (
    <AddNewPostBtnContainer>
      <AddNewPostBtn
        onClick={() => {
          navigate('/createNewPost');
        }}
      >
        <img src="src\assets\add_icon.png" style={{ height: '20px', opacity: '0.7' }} />
        <p>새 챌린지 등록하기</p>
      </AddNewPostBtn>
    </AddNewPostBtnContainer>
  );
};

export default AddNewPostSection;
