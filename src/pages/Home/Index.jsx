import './../../styles/Pages/Home.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import accomodations from '../../datas/accomodations.json';

function Home() {
  return (
    <div>
      <Banner />
      <section className="cards-section">
        {accomodations.map(({ id, title, cover }) => (
          <Card key={id} title={title} cover={cover} />
        ))}
      </section>
    </div>
  );
}

export default Home;
