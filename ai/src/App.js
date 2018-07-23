import React, { Component } from 'react';
import AI from "./components/AI";
import Particles from 'react-particles-js';
import { keyframes } from "styled-components";





class App extends Component {


  render() {
    
    return (
      <div>
 
        <Particles style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1
      

         }} 
         params = {{
          particles: {
            number: {
              value: 170,
              density: {
                enable: false,
                value_area: 800
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#2A93D5',
              opacity: 0.4,
              width: 1
            },
            shape: {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": `#2A93D5"`
              },
              polygon: {
                nb_sides: 7
              }
            }
           },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                }
              }
            },
            "retina_detect": true
        }} />
        <AI/>
      </div>
    );
  }
}

export default App;
