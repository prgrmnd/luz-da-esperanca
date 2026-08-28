import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TreatmentsPage from './pages/TreatmentsPage';
import SiteLayout from './layouts/SiteLayout';

export default function App() {
  return <BrowserRouter><Routes><Route element={<SiteLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/sobre" element={<AboutPage />} />
    <Route path="/atividades" element={<ActivitiesPage />} />
    <Route path="/tratamentos" element={<TreatmentsPage />} />
    <Route path="/noticias" element={<NewsPage />} />
    <Route path="/contato" element={<ContactPage />} />
  </Route></Routes></BrowserRouter>;
}
