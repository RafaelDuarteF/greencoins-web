// Login.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

import fundoLogin from '../../assets/fundo_login.mp4';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      // Simulando uma chamada API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
      alert('Login realizado com sucesso!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className='min-vh-100 min-vw-100' id='main-login'>
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className="video-bg">
        <source src={fundoLogin} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="login-box">
          {/* Círculos decorativos animados */}
          <div className="animated-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>

          <h2 className="text-center mb-4">Bem-vindo de volta!</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <div className="input-group">
                <span className="input-group-text">
                  <Mail size={20} />
                </span>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
            </div>

            <div className="form-group mb-4">
              <div className="input-group">
                <span className="input-group-text">
                  <Lock size={20} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Senha"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Lembrar de mim</label>
              </div>
              <a href="#" className="forgot-password">Esqueceu a senha?</a>
            </div>

            <button
              type="submit"
              className="btn btn-outline-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              ) : 'Login'}
            </button>

            <div className="text-center mt-4">
              <p className="infos-text">
                Não possui uma conta? <a href="#" className="signup-link">Cadastre-se</a>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  );
}

export default Login;
