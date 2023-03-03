import { useLoaderData } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';
import Host from '../../components/Host';
import Tag from '../../components/Tag';
import Ratings from '../../components/Ratings';
import '../../styles/Pages/Accomodation.css';
import Layout from '../../components/Layout';

function Accomodation() {
  const accomodation = useLoaderData();

  return (
    <Layout>
      <div className="accomodation">
        <Carrousel pictures={accomodation.pictures} />
        <div className="accomodation-details">
          <div>
            <h2 className="accomodation-title">{accomodation.title}</h2>
            <p className="accomodation-location">{accomodation.location}</p>
            <div className="tags">
              {accomodation.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="accomodation-host">
            <Host host={accomodation.host} />
            <Ratings rating={accomodation.rating} />
          </div>
        </div>
        <div className="accomodation-description">
          <Collapse title="Description" text={accomodation.description} />
          <Collapse title="Équipements" text={accomodation.equipments} />
        </div>
      </div>
    </Layout>
  );
}
export default Accomodation;
