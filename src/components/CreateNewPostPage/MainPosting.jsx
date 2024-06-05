import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';

const MainPosting = () => {
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
      <div>
        {postings.map((posting) => {
          return (
            <Link to="/myPage/:user_id" key={posting.id}>
              {posting.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPosting;
