import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const PostDetailPage = () => {
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
      <h1>PostDetailPage</h1>

      {postings.map((posting) => {
        return (
          <div key={posting.id}>
            {posting.title}
            {posting.content}
            {posting.url}
          </div>
        );
      })}
    </div>
  );
};

export default PostDetailPage;
