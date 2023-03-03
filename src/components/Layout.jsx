import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <main className="kasa-main">
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
