import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const modelRef = useRef();

  const { scene } = useGLTF('/animation/GreenCoin3.glb'); 

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={3} />;
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 75 }}
      style={{ width: '100%', height: '60vh' }}
      className='animation-coin-canva'
    >
      {/* Luzes */}
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Modelo e Controles */}
      <Model />
      <OrbitControls enableDamping={true} enableZoom={false} dampingFactor={0.05} />
    </Canvas>
  );
};

export default Scene;
