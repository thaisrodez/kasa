import './../../styles/Pages/Home.css';
import banner from './../../assets/banner.png';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import accomodations from '../../datas/accomodations.json';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

function Home() {
  return (
    <Layout>
      <Banner url={banner} title="Chez vous, partout et ailleurs" />
      <section className="cards-section">
        {accomodations.map(({ id, title, cover }) => (
          <Link key={id} to={`/accomodation/${id}`} className="card-link">
            <Card title={title} cover={cover} />
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export default Home;
