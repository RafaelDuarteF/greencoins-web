import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import greenCoin from '../assets/greencoin.png';

function FloatingCoins({ coinsCount }) {
  const min = 20; // valor mínimo
  const max = 64; // valor máximo
  const [sizeCoins, setSizeCoins] = useState([]);

  const maxImageCoins = 6;
  const minImageCoins = 1;

  // Função para gerar números aleatórios
  function generateRandomNumber() {
    const valor1 = Math.random() * (max - min) + min;
    const valor2 = valor1 * 0.75;
    return { valor1, valor2 };
  }

  // Função para pegar imagens aleatórias
  function generateRandomImage() {
    const randomNumber =
      Math.floor(Math.random() * (maxImageCoins - minImageCoins + 1)) +
      minImageCoins;
    return randomNumber;
  }

  useEffect(() => {
    const newSizeCoins = [];
    for (let i = 0; i < coinsCount; i++) {
      const randomNumber = generateRandomNumber();
      newSizeCoins.push(randomNumber);
    }

    setSizeCoins(newSizeCoins);
  }, [coinsCount]);

  useEffect(() => {
    console.log(sizeCoins);
  }, [sizeCoins]);

  return (
    <div
      className="position-absolute"
      style={{
        userSelect: 'none',
        height: '100%',
        width: '100%',
        top: 10,
        zIndex: -1,
      }}
    >
      {sizeCoins.length > 0 &&
        sizeCoins.map((coin, index) => (
          <motion.div
            key={index}
            className="position-absolute coin"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${index * 0.5}s`,
              userSelect: 'none',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <div
              className="coin-div d-flex align-items-center justify-content-center"
              style={{
                width: `${coin.valor2}px`,
                height: `${coin.valor2}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                userSelect: 'none',
              }}
            >
              <img
                className="coin-div"
                src={'/images_hero/greenCoin' + generateRandomImage() + '.png'}
                alt="GreenCoin"
                style={{ width: '100%', userSelect: 'none' }}
              />
            </div>
          </motion.div>
        ))}
    </div>
  );
}

export default FloatingCoins;
