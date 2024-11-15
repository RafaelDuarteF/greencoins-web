import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import greenCoin from '../assets/greencoin.png';

const FloatingCoins = ({ coinsCount }) => (
    <div className="col-lg-6 position-relative" style={{ height: '400px' }}>
      {Array(coinsCount).fill(null).map((_, index) => (
        <motion.div
          key={index}
          className="position-absolute coin"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animationDelay: `${index * 0.5}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.5 }}
        >
          <div className="coin-div rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center glow-effect"
            style={{ width: '64px', height: '64px' }}>
            <div className="coin-div rounded-circle bg-green-color d-flex align-items-center justify-content-center"
              style={{ width: '48px', height: '48px', transform: 'rotate(12deg)' }}>
              <img className='coin-div' src={greenCoin} alt="GreenCoin" style={{ width: '100%' }} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

export default FloatingCoins;