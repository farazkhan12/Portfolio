import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer class="page-footer font-medium cyan darken-4">
    <div class="container mt-5">
        <div class="row">
        <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
            <a class="li-ic" href="https://www.linkedin.com/in/farazkhan12/">
                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a class="github-ic" href="https://github.com/farazkhan12">
                <i class="fab fa-github fa-lg white-text fa-2x"> </i>
            </a>
            </div>
        </div>
        </div>
    </div>
    <div class="footer-copyright text-center py-3">Copyright © {new Date().getFullYear()} Faraz Khan
    </div>
    </footer>
  );
}

export default Footer;