import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import animationData from './animation.json';

// Importar lottie-react solo del lado del cliente
const LottieComponent = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const UncontrolledLottie = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <LottieComponent
      animationData={animationData}
      loop
      autoplay
      style={{ width: '300px', height: '300px' }}
    />
  );
};

export default UncontrolledLottie;
