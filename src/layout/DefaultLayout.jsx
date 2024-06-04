import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Body } from '../components/Body/Body.styledcomp';

const DefaultLayout = () => {
  return (
    <>
      <Header></Header>
      <Body>
        <Outlet></Outlet>
      </Body>
      <Footer></Footer>
    </>
  );
};

export default DefaultLayout;
