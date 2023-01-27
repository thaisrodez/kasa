import { useParams } from 'react-router-dom';

function Accomodation() {
  const { accomodationId } = useParams();
  return <div>Accomodation</div>;
}
export default Accomodation;
