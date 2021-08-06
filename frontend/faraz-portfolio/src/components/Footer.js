import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer font-medium" style={{'background-color': '#002b2b'}}>
    <div className="container mt-5">
        <div className="row">
        <div className="col-md-12 py-5 ">
            <div className="mb-5 flex-center">
            <a className="li-ic" href="https://www.linkedin.com/in/farazkhan12/">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="github-ic" href="https://github.com/farazkhan12">
                <i className="fab fa-github fa-lg white-text fa-2x"> </i>
            </a>
            </div>
        </div>
        </div>
    </div>
    <div className="footer-copyright text-center py-3">Copyright © {new Date().getFullYear()} Faraz Khan
    </div>
    </footer>
  );
}

export default Footer;