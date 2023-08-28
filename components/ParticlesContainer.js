
import { useCallback } from 'react';
// import poligono from ''


const ParticlesContainer = () => {

  const particlesInit = useCallback(async( engine ) => {
    await loadFull( engine );
  }, []);

  const particlesLoaded = useCallback( async() => {}, [] );

  return <></>

};

export default ParticlesContainer;
