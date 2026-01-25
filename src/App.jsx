import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgress } from './components/PremiumEffects';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

import Contact from './pages/Contact';
import DoctorProfile from './pages/DoctorProfile';
import BrochurePreview from './pages/BrochurePreview';
import CaseGallery from './pages/CaseGallery';
import './styles/premium.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/treatments" element={<Layout><Treatments /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/resources/:id" element={<Layout><BlogPost /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/doctor-profile" element={<Layout><DoctorProfile /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/case-gallery" element={<Layout><CaseGallery /></Layout>} />
        <Route path="/brochure" element={<BrochurePreview />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <BookingProvider>
        <ScrollProgress />
        <ScrollToTop />
        <AnimatedRoutes />
      </BookingProvider>
    </Router>
  );
}

export default App;
