import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';
import Career from './pages/Career';
import FutureTech from './pages/FutureTech';
import AbdreamProject from './pages/AbdreamProject';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects/abdream" element={<AbdreamProject />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<Career />} />
                <Route path="/future" element={<FutureTech />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
