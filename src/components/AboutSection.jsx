import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import secondSectionImage from '../assets/second-section-image2.png';
import greenCoin from '../assets/greencoin2.png';

const AboutSection = () => {
  return (
    <>
      <img src={secondSectionImage} alt="Second Section" className="img-fluid" />
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 infos-about-section">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
              className="green-color glow-text display-4 fw-bold mb-3"
            >
              Sobre a Criptomoeda
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.5 }}
              className="text-light mb-4"
            >
              Entenda sobre.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.5 }}
              className="text-color-third mb-4"
            >
              A Criptomoeda se encontra na rede BNB Chain, uma das blockchains mais eficientes 
              (<b className='green-color'>diminuição de 99,95%</b> do gasto de eletricidade consumida durante o 
              processo de validação, comparado com o BitCoin). 
              A proposta da cripto é ser uma moeda sustentável, com baixo consumo de energia e custo operacional. 
              Usuários podem ganhar GreenCoins através de práticas de sustentabilidade, e a 
              utilizar para investimentos e trocas de produtos sustentáveis, gerando o efeito bola de neve 
              para a sustentabilidade no mundo.
            </motion.p>
            
            <div className="d-flex gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ amount: 0.5 }}
                className="btn btn-outline-success px-4 py-2 rounded-pill"
                onClick={() => window.open('https://bit.ly/4fmG455')}
              >
                Página da Cripto
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ amount: 0.5 }}
                className="btn btn-outline-success  px-4 py-2 rounded-pill"
                onClick={() => window.open('https://bscscan.com/token/0xbd9949be9aff6a500c9b13c3a11174734fad16a8')}
              >
                Acompanhe
              </motion.button>
            </div>
          </div>

          {/* Right Content - Bitcoin and floating elements */}
          <div className="col-lg-6 position-relative d-flex align-items-center justify-content-center greencoin-image">
            {/* Main Bitcoin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.5 }}
              className="position-absolute bitcoin-main"
              style={{left: 30}}
            >
              <div className="bg-opacity-25 d-flex align-items-center justify-content-center"
                style={{ width: '100%', }}>
                <div className="d-flex align-items-center justify-content-center img-greencoin"
                  style={{ width: '100%', fontSize: '4rem' }}>
                  <img className='coin-div' src={greenCoin} alt="GreenCoin" style={{ width: '100%' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
