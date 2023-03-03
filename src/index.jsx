import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home/Index';
import ErrorPage from './pages/Error/Index';
import About from './pages/About';
import Accomodation from './pages/Accomodation/Index';
import accomodations from './datas/accomodations.json';

function loader({ params }) {
  // load data
  const accomodation = accomodations.find(({ id }) => id === params.id);
  // throw error if no data found
  if (!accomodation) throw new Response('Not found', { status: 404 });

  return accomodation;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/accomodation/:id',
    element: <Accomodation />,
    loader: loader,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
