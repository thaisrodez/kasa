import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import accomodations from '../../datas/accomodations.json';

function Accomodation() {
  const { accomodationId } = useParams();

  const accomodation = () => {
    return accomodations.find(({ id }) => id === accomodationId);
  };

  return (
    <div>
      <Carrousel pictures={accomodation().pictures} />
    </div>
  );
}
export default Accomodation;
