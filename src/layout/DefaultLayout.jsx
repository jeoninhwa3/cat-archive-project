import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <br></br>
      <h1>Footer</h1>
    </div>
  );
};

export default DefaultLayout;
