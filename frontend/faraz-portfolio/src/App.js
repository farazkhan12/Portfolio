import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Particles from 'react-particles-js';
import React, { useRef, scroller } from 'react';
import Footer from "./components/Footer";

function App() {
  const mainPageRef = useRef(null);

  const scrollToMainPage = (ref) => ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  return (
    <>
    <Navbar />
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
    <Header scrollToMain={()=> scrollToMainPage(mainPageRef)}/>
    <div className="main-page" ref={mainPageRef}>
    <Cards />
    </div>
    <div className="footer" >
      <Footer />
    </div>
    </>
  );
}

export default App;
