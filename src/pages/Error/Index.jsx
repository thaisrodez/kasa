import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Pages/Error.css';

function ErrorPage() {
  return (
    <div>
      <main className="kasa-main">
        <Header />
        <div className="error">
          <h1 className="error-title">404</h1>
          <p className="error-text">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="error-link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
