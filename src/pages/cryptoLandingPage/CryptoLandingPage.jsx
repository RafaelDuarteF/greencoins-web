import React, { useEffect, useState } from 'react';
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

function CryptoLanding() {
  const { isLogged } = useParams();
  const [transactions, setTransactions] = useState([
    {
      address: "0xbd9949be9aff6a500c9b13c3a11174734fad16a8",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x0000000000000000000000000000000000000000000000000000000000000000",
        "0x000000000000000000000000ec43b4d42f21087165e1bd1aacec9223d54d744e",
      ],
      data: "0x00000000000000000000000000000000000000000000021e19e0c9bab2400000",
      blockNumber: "0x29e6230",
      blockHash: "0x85a8f8c02223c649d7c814f18e2ed5c3001f6f82e94b48b026da35bbc9658317",
      timeStamp: "0x6732d0c5",
      gasPrice: "0xb2d05e00",
      gasUsed: "0xa9271",
      logIndex: "0x3b",
      transactionHash: "0x39d74a566562e5660fa856955427883a4b5c963f649881e2b0483d86f670701e",
      transactionIndex: "0x2a",
    },
  ]);

  useEffect(() => {
    if (isLogged && !sessionStorage.getItem('welcomeMessageShown')) {
      swal('Logado com sucesso!', 'Seja bem-vindo!', 'success');
      sessionStorage.setItem('welcomeMessageShown', 'true');
    }
     
  }, [isLogged]);

  useEffect(() => {
    // axios.get('https://api.bscscan.com/api?module=logs&action=getLogs&apikey=73YYMDT87AZZEWXHVRYN77ZU8QBHYJXDP1&address=0xbd9949be9aff6a500c9b13c3a11174734fad16a8&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
    //   .then((response) => {
    //     console.log(response.data.result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <main className="min-vh-100 min-vw-100">
      <section id="hero" className="min-vh-100 min-vw-100 position-relative overflow-hidden">
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
    </main>
  );
}

export default CryptoLanding;
