import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';

const MainPage = () => {
  const [postings, setPostings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('posts').select();
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setPostings(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>MainPage</h1>
      <h1>
        <Link to="/myPage/:user_id">UserProfilePage</Link>
        <br></br>
        <Link to="/createNewPost/:post_id">CreateNewPostPage</Link>
        <br></br>
        <Link to="/logIn">LogInPage</Link>
        <br></br>
        <Link to="/post/:post_id">PostDetailPage</Link>
        <h2>New posting</h2>
        <div>
          {postings.map((posting) => {
            return <Link to="/myPage/:user_id">{posting.title}</Link>;
          })}
        </div>
      </h1>
    </div>
  );
};

export default MainPage;
