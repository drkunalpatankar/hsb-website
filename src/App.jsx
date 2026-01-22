import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgress } from './components/PremiumEffects';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/premium.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollProgress />
      <ScrollToTop />
      <WhatsAppButton />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
