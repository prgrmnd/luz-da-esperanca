import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import TreatmentsPage from './pages/TreatmentsPage';
import SiteLayout from './layouts/SiteLayout';
import ProgramacaoPage from './pages/subpages/ProgramacaoPage';
import CampanhasPage from './pages/subpages/CampanhasPage';
import DownloadsPage from './pages/subpages/DownloadsPage';
import ReforcoDeLuzPage from './pages/subpages/ReforcoDeLuzPage';
import EvangelizacaoInfantilPage from './pages/subpages/EvangelizacaoInfantilPage';
import MocidadeEspiritaPage from './pages/subpages/MocidadeEspiritaPage';
import EscolaEvangelizacaoAdultosPage from './pages/subpages/EscolaEvangelizacaoAdultosPage';
import SopaFraternaPage from './pages/subpages/SopaFraternaPage';
import EscolaEstudosEspiritaPage from './pages/subpages/EscolaEstudosEspiritaPage';
import CirurgiaEspiritualPage from './pages/subpages/CirurgiaEspiritualPage';
import TratamentoDistanciaPage from './pages/subpages/TratamentoDistanciaPage';
import TratamentoDiasDaSemana from './pages/subpages/TratamentoDiasDaSemana';
import VoluntariadoPage from './pages/VoluntariadoPage';
import QueroAjudarPage from './pages/QueroAjudarPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return <BrowserRouter><Routes>
    <Route element={<SiteLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/atividades" element={<ActivitiesPage />} />
      <Route path="/tratamentos" element={<TreatmentsPage />} />
      <Route path="/noticias" element={<NewsPage />} />
      <Route path="/noticias/:slug" element={<ArticlePage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/sobre/programacao" element={<ProgramacaoPage />} />
      <Route path="/sobre/campanhas" element={<CampanhasPage />} />
      <Route path="/sobre/downloads" element={<DownloadsPage />} />
      <Route path="/quero-ajudar" element={<QueroAjudarPage />} />
      <Route path="/voluntariado" element={<VoluntariadoPage />} />
      <Route path="/atividades/reforco-de-luz" element={<ReforcoDeLuzPage />} />
      <Route path="/atividades/evangelizacao-infantil-sementinha-de-luz" element={<EvangelizacaoInfantilPage />} />
      <Route path="/atividades/mocidade-espirita-luiz-sergio" element={<MocidadeEspiritaPage />} />
      <Route path="/atividades/escola-de-evangelizacao-de-adultos" element={<EscolaEvangelizacaoAdultosPage />} />
      <Route path="/atividades/sopa-fraterna-bezerra-de-menezes" element={<SopaFraternaPage />} />
      <Route path="/atividades/escola-de-estudos-espiritas" element={<EscolaEstudosEspiritaPage />} />
      {/* <Route path="/tratamentos/segunda-feira" element={<TratamentoSegundaPage />} /> */}
      {/* <Route path="/tratamentos/terca-feira" element={<TratamentoTercaPage />} /> */}
      {/* <Route path="/tratamentos/quarta-feira" element={<TratamentoQuartaPage />} /> */}
      <Route path="/tratamentos/cirurgia-espiritual" element={<CirurgiaEspiritualPage />} />
      <Route path="/tratamentos/tratamento-a-distancia" element={<TratamentoDistanciaPage />} />
      <Route path="/tratamentos/dias-da-semana" element={<TratamentoDiasDaSemana />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes></BrowserRouter>;
}
