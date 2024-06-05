import { RouterProvider } from 'react-router-dom';
import router, { unloggedInRouter } from './routes/routes';
import { useSelector } from 'react-redux';

function App() {
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
