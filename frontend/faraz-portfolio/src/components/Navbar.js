import React from 'react'
import logo from "../images/faraz_logo2.png"
// REACT FONTAWESOME IMPROTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default class Navbar extends React.Component{
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar bg-dark";
        } else {
            document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar";
        }
    };
  
    render() {
      return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Faraz Khan" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/farazkhan12">Github</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/farazkhan12/">Linkedin</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
       )
     }
  }
