import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from './supabaseClient';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        navigate('/');
      } else {
        setUser(null);
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
