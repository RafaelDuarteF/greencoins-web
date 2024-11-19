import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  // Referência para o modelo
  const modelRef = useRef();

  // Hook para carregar o modelo GLB
  const { scene } = useGLTF('/animation/GreenCoin2.glb'); // Substitua pelo caminho correto

  // Animação de rotação
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajuste a velocidade da rotação
    }
  });

  // Retorna o modelo para renderizar
  return <primitive ref={modelRef} object={scene} scale={3} />;
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 75 }}
      style={{ width: '100%', height: '60vh' }}
    >
      {/* Luzes */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Modelo e Controles */}
      <Model />
      <OrbitControls enableDamping={true} enableZoom={false} dampingFactor={0.05} />
    </Canvas>
  );
};

export default Scene;