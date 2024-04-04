import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Header title="SWAPI Tables"/>
      <Nav />
        <div className="table-body">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default Layout
