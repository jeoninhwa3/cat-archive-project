import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <StyledHeader>Header</StyledHeader>
      <br></br>
      <Outlet></Outlet>
      <br></br>
      <h1>Footer</h1>
    </div>
  );
};

export default DefaultLayout;
