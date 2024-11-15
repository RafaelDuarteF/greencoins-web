import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { motion } from 'framer-motion';

import Navbar from '../../components/NavBar';
import HeroSection from '../../components/HeroSection';
import GradientOverlay from '../../components/GradientOverlay';
import AboutSection from '../../components/AboutSection';


// Second Section Component


// Main CryptoLanding Component
const CryptoLanding = () => (
  <main className='min-vh-100 min-vw-100'>
    <section id="hero" className="min-vh-100 min-vw-100 position-relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <GradientOverlay />
    </section>
    <section id="sobre" className="min-vh-100 position-relative overflow-hidden d-flex align-items-center">
        <AboutSection />
    </section>
  </main>
);

export default CryptoLanding;
