import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ArtistesPage from './pages/ArtistesPage';
import ServicesPage from './pages/ServicesPage';
import ExpandedServicesPage from './pages/ExpandedServicesPage';
import './styles/Global.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artistes" element={<ArtistesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/expanded" element={<ExpandedServicesPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
