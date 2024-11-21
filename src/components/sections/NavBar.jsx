import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/LogoGreenCoin.png';

const Navbar = () => {
  const username = localStorage.getItem('username'); // Recupera o nome de usuário
  const navigate = useNavigate();

  const handleRemoveUsername = () => {
    localStorage.removeItem('username'); // Remove o nome do usuário
    navigate(`/`); // Redireciona para a página inicial
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark pb-0 py-md-3">
      <div className="container">
        <motion.a
          className="navbar-brand d-flex align-items-center logo"
          href="#"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={logo}
            style={{ width: '30px', height: '30px' }}
          ></img>
          <span className="green-color fw-bold">GreenCoin</span>
        </motion.a>
        {/* Botão para toggle do menu */}
        <button
          className="navbar-toggler navbar-toggler-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        {/* Links do menu */}
        <motion.div
          className="collapse navbar-collapse"
          id="navbarNav"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="navbar-nav ms-auto">
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a className="nav-link" href="#hero">
                Inicial
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a className="nav-link" href="#details">
                Detalhes
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a className="nav-link" href="#gallery">
                Atualizações
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a className="nav-link" href="#videos">
                Vídeos
              </a>
            </motion.li>

            {/* Exibe o nome de usuário ou o link de login */}
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {username ? (
                <span className="nav-link username-logged glow-text">
                  Olá, {username}
                </span> // Exibe o nome do usuário
              ) : (
                <a
                  className="nav-link nav-link-entrar"
                  onClick={() => navigate(`/login`)}
                >
                  <b>Entrar</b>
                </a>
              )}
            </motion.li>
            {username ? (
              <motion.li
                className="nav-item"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <a
                  className="nav-link nav-link-sair"
                  onClick={handleRemoveUsername}
                >
                  Sair
                </a>
              </motion.li>
            ) : null}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
