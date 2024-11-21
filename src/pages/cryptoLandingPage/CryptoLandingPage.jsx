import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { motion } from 'framer-motion';
import swal from 'sweetalert';

import Navbar from '../../components/NavBar';
import HeroSection from '../../components/HeroSection';
import GradientOverlay from '../../components/GradientOverlay';
import AboutSection from '../../components/AboutSection';
import TechnicalDetailsSection from '../../components/TechnicalDetailsSection';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../components/CarouselSection';
import VideoSection from '../../components/VideoSection';
import Footer from '../../components/Footer';

function CryptoLanding() {
  const { isLogged } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (isLogged && !sessionStorage.getItem('welcomeMessageShown')) {
      swal('Logado com sucesso!', 'Seja bem-vindo!', 'success');
      sessionStorage.setItem('welcomeMessageShown', 'true');
    }
  }, [isLogged]);

  useEffect(() => {
    fetch(
      'https://api.bscscan.com/api?module=logs&action=getLogs&apikey=73YYMDT87AZZEWXHVRYN77ZU8QBHYJXDP1&address=0xbd9949be9aff6a500c9b13c3a11174734fad16a8&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.result);
        setTransactions(data.result.reverse());
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <main className="min-vh-100 min-vw-100">
      <section
        id="hero"
        className="min-vh-100 min-vw-100 position-relative overflow-hidden"
      >
        <header className="top-0 start-0 w-100">
          <Navbar />
        </header>
        <HeroSection />
        <GradientOverlay />
      </section>
      <section
        id="sobre"
        className="position-relative overflow-hidden d-flex align-items-center"
      >
        <AboutSection />
      </section>
      <section id="details" className="position-relative overflow-hidden">
        <TechnicalDetailsSection transactions={transactions} />
      </section>
      <section id="gallery" className="position-relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageCarousel />
        </motion.div>
      </section>
      <section id="videos" className="position-relative">
        <VideoSection />
      </section>
      <Footer />
    </main>
  );
}

export default CryptoLanding;
