import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/myPage/:user_id">UserProfilePage</Link>
      <br></br>
      <Link to="/createNewPost/:post_id">CreateNewPostPage</Link>
      <br></br>
      <Link to="/logIn">LogInPage</Link>
      <br></br>
      <Link to="/post/:post_id">PostDetailPage</Link>
    </div>
  );
};

export default MainPage;
