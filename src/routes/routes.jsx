import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import UserProfilePage from '../pages/UserProfilePage';
import CreateNewPostPage from '../pages/CreateNewPostPage';
import LogInPage from '../pages/LogInPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostUpdate from '../pages/PostUpdate';
import RegisterPage from '../pages/RegisterPage';
import DefaultLayout from '../layout/DefaultLayout';
import Temp from '../pages/Temp';

export const unloggedInRouter = createBrowserRouter([
  {
    path: '/',
    element: <LogInPage></LogInPage>
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>
  },
  {
    path: '/LogIn',
    element: <Temp></Temp>
  },
  {
    path: '/myPage/:user_id',
    element: <Temp></Temp>
  },
  {
    path: '/createNewPost',
    element: <Temp></Temp>
  },
  {
    path: '/PostUpdate/:id',
    element: <Temp></Temp>
  },
  {
    path: '/post/:post_id',
    element: <Temp></Temp>
  }
]);

const router = createBrowserRouter([
  {
    element: <DefaultLayout></DefaultLayout>,
    children: [
      { path: '/', element: <MainPage></MainPage> },

      {
        path: '/myPage/:user_id',
        element: <UserProfilePage></UserProfilePage>
      },
      {
        path: '/createNewPost',
        element: <CreateNewPostPage></CreateNewPostPage>
      },

      {
        path: '/PostUpdate/:id',
        element: <PostUpdate></PostUpdate>
      },
      {
        path: '/post/:post_id',
        element: <PostDetailPage></PostDetailPage>
      }
    ]
  }
]);

export default router;
