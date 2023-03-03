import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <main className="kasa-main">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
