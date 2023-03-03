import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import '../../styles/Pages/Error.css';

function ErrorPage() {
  return (
    <Layout>
      <div className="error">
        <h1 className="error-title">404</h1>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
}

export default ErrorPage;
