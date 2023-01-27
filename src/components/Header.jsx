import logo from './../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import './../styles/Components/Header.css';

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="kasa-header">
      <img src={logo} alt="kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        <Link to="/" className={pathname === '/' ? 'current-page' : undefined}>
          Accueil
        </Link>
        <Link
          to="/about"
          className={pathname === '/about' ? 'current-page' : undefined}
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
