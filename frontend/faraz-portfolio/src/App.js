import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Particles from 'react-particles-js';
import React, { useRef, scroller } from 'react';
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import About from "./components/About";

import { Switch, Route } from 'react-router-dom'
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";


const App = () => {
  const headerRef = useRef(null)
  const aboutPageRef = useRef(null)
  const handleScroll = (ref) => ref.current.scrollIntoView({behavior: 'smooth'})

  const MainPage = () => {
    const mainPageRef = useRef(null)
  
    return (
      <>
      <Particles 
      className="particles-canvas"
        params={{
          fps_limit: 40,
          particles: {
            number: {
              value: 35,
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
      <Header ref={headerRef} scrollToMain={()=> handleScroll(mainPageRef)}/>
      <div className="main-page" ref={mainPageRef}>
      <About ref={aboutPageRef} />
      <Cards />
      <hr class="my-4"></hr>
      <Counter />
      </div>
      </>
    )
  }

  return (
    <>
    <Navbar scrollToHeader={()=> handleScroll(headerRef)} />
    <Switch>
      <Route path='/' exact component={MainPage}></Route>
      <Route path='/shop' exact component={Shop}></Route>
      <Route path='/shop/:id' component={ShopDetail}></Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
