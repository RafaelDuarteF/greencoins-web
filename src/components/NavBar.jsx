import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

// Navbar Component
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark py-3">
    <div className="container">
      <motion.a 
        className="navbar-brand d-flex align-items-center" 
        href="#"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="rounded-circle bg-green-color me-2" style={{ width: '30px', height: '30px' }}></div>
        <span className="green-color fw-bold">GreenCoins</span>
      </motion.a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Usando href="#" para navegação dentro da página */}
          <li className="nav-item">
            <a className="nav-link" href="#hero">Home</a> {/* Navegação para a seção Hero */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre</a> {/* Navegação para a seção Sobre */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">Contato</a> {/* Navegação para a seção Contato */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
