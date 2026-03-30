import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import FloatingActions from './components/FloatingActions';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';

const App = () => (
  <div className="min-h-screen">
    <ScrollToTopOnRoute />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
    <FloatingActions />
    <ScrollToTopButton />
  </div>
);

export default App;
