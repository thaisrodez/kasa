import { Routes, Route } from 'react-router-dom';
import Home from './Home/Index.jsx';
import Accomodation from './Accomodation/Index';
import ErrorPage from './Error/Index';
import Layout from './../components/Layout.jsx';
import About from './About/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="accomodation/:accomodationId" element={<Accomodation />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
