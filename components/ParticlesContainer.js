import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import poligono from '../public/avatar.png'


const ParticlesContainer = () => {

  const particlesInit = useCallback(async( engine ) => {
    await loadFull( engine );
  }, []);

  const particlesLoaded = useCallback( async() => {}, [] );

  return <Particles 
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: true},
        "fps_limit": 60,
          "particles": {
              "collisions": {
                  "enable": false
              },
              "number": {
                  "value": 200,
                  "density": {
                      "enable": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 30,
                  "opacity": 0.4
              },
              "move": {
                  "speed": 1
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "opacity_min": 0.05,
                      "speed": 1,
                      "sync": false
                  },
                  "value": 0.4
              }
          },
          "polygon": {
              "enable": true,
              "scale": 0.5,
              "type": "inline",
              "move": {
                  "radius": 10
              },
              "url": {poligono},
              "inline": {
                  "arrangement": "equidistant"
              },
              "draw": {
                  "enable": true,
                  "stroke": {
                      "color": "rgba(255, 255, 255, .2)"
                  }
              }
          },
          "retina_detect": false,
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  }
              },
              "modes": {
                  "bubble": {
                      "size": 6,
                      "distance": 40
                  }
              }
          }
  }} />

};

export default ParticlesContainer;
