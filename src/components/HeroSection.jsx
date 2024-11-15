import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingCoins from './FloatingCoins';
import { motion } from 'framer-motion';

const HeroSection = () => (
    <div className="container py-5">
      <div className="row align-items-center">
        <motion.div 
          className="col-lg-6"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold mb-4">
            <span className="green-color">GreenCoins:</span><br />
            <span className="green-color"> A primeira</span>
            <span className="text-white"> Criptomoeda sustentável</span><br />
          </h1>
          <p className="text-secondary fs-5 mb-3">
            Experimente o futuro sustentável.
          </p>
          <p className="text-secondary mb-4">
            A GreenCoin é uma moeda com o objetivo de incentivar a sustentabilidade no mundo. Em uma rede da blockchain menos poluente e entregue por práticas sustentáveis, a GreenCoin é a primeira criptomoeda sustentável do mundo.
          </p>
          <button className="btn btn-outline-success px-4 py-2 rounded-pill">
            SAIBA MAIS
          </button>
        </motion.div>
        <FloatingCoins coinsCount={6} />
      </div>
    </div>
  );

export default HeroSection;