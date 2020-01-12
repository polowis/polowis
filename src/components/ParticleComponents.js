import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      background: "rgb(33,36,50)",
      position: "fixed",
      zIndex: -1,
      width: "100%",
      height: "120%"
    

    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 2,
              color: "#000000"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "./logo.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.4008530152163807,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 0,
            color: "#ffffff",
            opacity: 0.3687847739990702,
            width: 0.6413648243462091
          },
          move: {
            enable: true,
            speed: 6,
            direction: "bottom",
            random: true,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: [
                  "grab", 
                  "bubble"
              ]
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 600,
              size: 12,
              duration: 1,
              opacity: 0.8,
              speed: 2
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
