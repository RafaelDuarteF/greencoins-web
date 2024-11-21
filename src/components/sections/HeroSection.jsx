import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingCoins from '../general/FloatingCoins';
import { motion } from 'framer-motion';
import Scene from '../general/CoinAnimation';

const HeroSection = () => (
  <div className="container pt-0 pb-5 py-md-5">
    <div className="row align-items-center position-relative top-z-index">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }} // Animação quando o componente entrar na viewport
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5 }} // A animação acontece quando 50% do componente estiver visível
        style={{ zIndex: 10 }}
      >
        <div className="d-md-flex flex-md-row-reverse justify-content-between">
          <div style={{ minWidth: '50%', zIndex: 10 }}>
            <Scene />
          </div>
          <div className="text-center text-md-start">
            <h1 className="display-4 fw-bold mb-4">
              <span className="green-color">GreenCoin:</span>
              <br />
              <span className="green-color"> A primeira</span>
              <span className="text-white"> Criptomoeda sustentável</span>
              <br />
            </h1>
            <p className="text-secondary text-white-hero fs-5 mb-3">
              Experimente o futuro sustentável.
            </p>
            <p className="text-secondary text-white-hero mb-4">
              A GreenCoin é uma moeda com o objetivo de incentivar a
              sustentabilidade no mundo. Em uma rede da blockchain que consome
              menos energia, a GreenCoin é a primeira criptomoeda sustentável do
              mundo.
            </p>
            <motion.button
              whileInView={{ opacity: 1, y: 0 }} // Animação do botão ao entrar na viewport
              initial={{ opacity: 0, y: 20 }} // Inicia com opacidade 0 e posição ligeiramente abaixo
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.5 }} // Só anima quando 50% do botão estiver visível
              className="btn btn-outline-success px-4 py-2 rounded-pill"
              onClick={() => (window.location.href = '#sobre')}
            >
              SAIBA MAIS
            </motion.button>
          </div>
        </div>
      </motion.div>
      <FloatingCoins coinsCount={6} />
    </div>
  </div>
);

export default HeroSection;
