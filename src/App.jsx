import { RouterProvider } from 'react-router-dom';
import router, { unloggedInRouter } from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import supabase from './supabaseClient';
import { SET_IS_LOGGED_IN } from './redux/modules/newsFeed';

function App() {
  const dispatch = useDispatch();

  const session = supabase.auth.getSession();

  if (session.user !== undefined) {
    dispatch(SET_IS_LOGGED_IN(true));
  }

  const isLoggedIn = useSelector((state) => {
    return state.newsFeed.isLoggedIn;
  });

  if (isLoggedIn) {
    return <RouterProvider router={router}></RouterProvider>;
  } else {
    return <RouterProvider router={unloggedInRouter}></RouterProvider>;
  }
}

export default App;
