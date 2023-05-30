import React from "react";
// import GitHubButton from 'react-github-btn'
import "./style.css";
function Footer() {
  return (
    <footer className="page-footer font-small special-color-dark pt-4 ">

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="#" style={{ color: "#65b6f0" }}>
          {" "}
          Aman Verma & Afree Javed
        </a>
      </div>
    </footer>
  );
}

export default Footer;
