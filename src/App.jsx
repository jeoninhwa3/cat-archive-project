import { RouterProvider } from 'react-router-dom';
import router, { unloggedInRouter } from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SET_IS_LOGGED_IN } from './redux/modules/newsFeed';
import supabase from './supabaseClient.js';
function App() {
  const dispatch = useDispatch();
  const checkLogInStatus = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    // 접속한 사용자가 로그인상태라면 user가 잘 반환되고,
    // 로그인하지 않았다면 user가 잘 반환되지 않음
    if (user) {
      dispatch(SET_IS_LOGGED_IN(true));
    } else {
      dispatch(SET_IS_LOGGED_IN(false));
    }
  };

  useEffect(() => {
    checkLogInStatus();
  }, []);
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
