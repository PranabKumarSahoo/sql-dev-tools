import React from "react";
import "./Footer.css"; // Corrected import path

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://sql-dev-tool.web.app/">Home</a></li>
            <li><a href="https://github.com/topics/developer-tool">DevTools</a></li>
          </ul>
        </div>
       <div className="Contribute">
          <h3>Contribute</h3>
          <ul>
            <li><a href="/">Documentation</a></li>
            <li><a href="https://github.com/PranabKumarSahoo/sql-dev-tools">Github Repository</a></li>
          </ul>
        </div>
        <div className="Community">
          <h3>Community</h3>
          <ul>
            <li><a href="https://www.socialwinterofcode.com/">SWOC</a></li>
            <li><a href="/devtools">Discord</a></li>
          </ul>
        </div>
        <div className="Developer Resources">
          <h3>Developer Resources</h3>
          <ul>
            <li><a href="https://github.com/PranabKumarSahoo/sql-dev-tools?tab=MIT-1-ov-file#readme">Licence</a></li>
            <li><a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">Code of Conduct</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <div className="copyright">
            <p>&copy;2024 SQL DevTools Project-SWOC'24.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 