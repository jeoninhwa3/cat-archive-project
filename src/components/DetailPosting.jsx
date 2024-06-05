import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const DetailPosting = () => {
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
      {postings.map((posting) => {
        return (
          <div key={posting.id}>
            <h3>{posting.title}</h3>
            <p>{posting.content}</p>
            <img src={posting.url} alt="Post Image" />
          </div>
        );
      })}
    </div>
  );
};

export default DetailPosting;
