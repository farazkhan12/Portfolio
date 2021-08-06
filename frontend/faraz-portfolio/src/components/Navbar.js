import React from 'react'
// REACT FONTAWESOME IMPROTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NavLink as Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar z-depth-2 custom";
        } else {
            document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar";
        }
    };
  
    render() {
      return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
        <a className="navbar-brand custom" onclick={this.scrollToHeader} href="#">FK</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to='/' exact>Home</Link>
            </li>
            <li className="nav-item" onClick={this.scrollToAbout} >
                <Link className="nav-link" to='/' exact>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/' exact>Experience</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/shop'>Fortnite Shop</Link>
            </li>
            <li className="nav-item-social d-none d-lg-block">
            <a className="github-ic" href="https://github.com/farazkhan12">
                <i className="fab fa-github fa-lg white-text fa-2x"> </i>
            </a>
            </li>
            <li className="nav-item-social d-none d-lg-block">
            <a className="li-ic" href="https://www.linkedin.com/in/farazkhan12/">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
       )
     }
  }
