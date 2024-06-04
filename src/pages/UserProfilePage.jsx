import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
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
      <h1>UserProfilePage</h1>
      <div>
        {postings.map((posting) => {
          return <Link to="/createNewPost/:post_id">{posting.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default UserProfilePage;
