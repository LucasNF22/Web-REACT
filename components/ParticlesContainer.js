import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
// import poligono from ''


const ParticlesContainer = () => {

  const particlesInit = useCallback(async( engine ) => {
    await loadFull( engine );
  }, []);

  const particlesLoaded = useCallback( async() => {}, [] );

  return <Particles 
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      
      />

};

export default ParticlesContainer;
