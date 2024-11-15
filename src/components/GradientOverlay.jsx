import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GradientOverlay = () => (
    <>
      <div className="gradient-overlay" style={{ top: 0, right: 0 }}></div>
      <div className="gradient-overlay" style={{ bottom: 0, left: 0 }}></div>
    </>
  );

export default GradientOverlay;