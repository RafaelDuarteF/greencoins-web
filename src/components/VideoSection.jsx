import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from 'react-bootstrap';

import videoImage1 from '../assets/video1.png';
import videoImage2 from '../assets/video2.png';

const VideoSection = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const videos = [
    {
      id: 'Zyhc7YrgrLY',
      title: 'EDGE - O futuro da mineração de criptos com GreenCoins.',
      thumbnail: videoImage1
    },
    {
      id: 'kXKUyH3A7LM',
      title: 'Video Pitch - GreenCoins',
      thumbnail: videoImage2
    }
  ];

  const VideoModal = ({ show, handleClose, videoId, title }) => (
    <Modal 
      show={show} 
      onHide={handleClose} 
      size="lg" 
      centered 
      className="video-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ratio ratio-16x9">
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );

  return (
    <section className="container-fluid py-5">
      <div className="container">
        <motion.h2 
          className="text-center glow-text section-title display-4 mb-5 mt-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Nosso Desenvolvimento
        </motion.h2>
        
        <div className="row justify-content-center">
          {videos.map((video, index) => (
            <div key={video.id} className="col-md-5 mb-4">
              <motion.div
                className="video-thumbnail-wrapper shadow-lg rounded cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                onClick={() => index === 0 ? setShow1(true) : setShow2(true)}
              >
                <div className="position-relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="img-videos rounded" 
                  />
                  <div className="play-overlay">
                    <i className="fas fa-play-circle"></i>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <VideoModal 
          show={show1} 
          handleClose={() => setShow1(false)} 
          videoId={videos[0].id} 
          title={videos[0].title} 
        />
        <VideoModal 
          show={show2} 
          handleClose={() => setShow2(false)} 
          videoId={videos[1].id} 
          title={videos[1].title} 
        />
      </div>
    </section>
  );
};

export default VideoSection;