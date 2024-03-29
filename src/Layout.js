import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header title="SWAPI Tables"/>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout