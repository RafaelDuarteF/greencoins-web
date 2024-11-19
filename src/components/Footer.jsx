import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      id='footer' 
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <motion.div variants={sectionVariants}>
          <Row>
            <Col md={4}>
              <motion.h5 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Sobre Nós
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p>Transformando o futuro das criptomoedas através de inovação e tecnologia.</p>
              </motion.p>
            </Col>
            <Col md={4}>
              <motion.h5
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Links Rápidos
              </motion.h5>
              <ul className="list-unstyled links-rapidos">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 0 * 0.1 }}
                  >
                    <a href={`#hero`}>Início</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 1 * 0.1 }}
                  >
                    <a href={`#sobre`}>Sobre</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 2 * 0.1 }}
                  >
                    <a href={`#details`}>Detalhes</a>
                  </motion.li>
                    <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 3 * 0.1 }}
                  >
                    <a href={`#gallery`}>Galeria</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 4 * 0.1 }}
                  >
                    <a href={`#videos`}>Vídeos</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + 5 * 0.1 }}
                  >
                    <a href={`/login`}>Login</a>
                  </motion.li>
              </ul>
            </Col>
            <Col md={4}>
              <motion.h5
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Contato
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p>Email: greencoins@gmail.com</p>
              </motion.p>
              <div className="social-icons">
                {['twitter', 'linkedin', 'instagram'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-white me-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <i className={`fab fa-${social}`}></i>
                  </motion.a>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
        <motion.div 
          variants={sectionVariants}
          className="mt-4"
        >
          <Row>
            <Col className="text-center">
              <motion.p 
                className="mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                © 2024 GreenCoins. Todos os direitos reservados.
              </motion.p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;