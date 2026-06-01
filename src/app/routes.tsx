import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Residential } from './pages/Residential';
import { Commercial } from './pages/Commercial';
import { ServiceAreas } from './pages/ServiceAreas';
import { CityPage } from './pages/CityPage';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'residential', Component: Residential },
      { path: 'commercial', Component: Commercial },
      { path: 'service-areas', Component: ServiceAreas },
      { path: 'service-areas/:citySlug', Component: CityPage },
      { path: 'about', Component: About },
      { path: 'reviews', Component: Reviews },
      { path: 'faq', Component: FAQ },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
