import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark py-3">
    <div className="container">
      <motion.a
        className="navbar-brand d-flex align-items-center logo"
        href="#"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div
          className="rounded-circle bg-green-color me-2"
          style={{ width: '30px', height: '30px' }}
        ></div>
        <span className="green-color fw-bold">GreenCoins</span>
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
      >
      </button>
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
              Home
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
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <a className="nav-link" href="/login">
              Entrar
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  </nav>
);

export default Navbar;
