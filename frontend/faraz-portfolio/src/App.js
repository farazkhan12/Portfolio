import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
      params={{
        fps_limit: 40,
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color:  "#ffffff"
            }
          },
          retina_detect: false,
          interactivity: {
              events: {
                  onhover: {
                      enable: true,
                      mode: "bubble"
                  }
              },
              modes: {
                  bubble: {
                      size: 6,
                      distance: 40
                  }
              }
          }
        }
      }}/>
    <Navbar />
    <Header />
    </>
  );
}

export default App;
