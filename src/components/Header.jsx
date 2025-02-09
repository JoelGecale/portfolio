import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
<div className="container-fluid">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 px-5 border-bottom fixed-top">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4 logo">Joel Gecale</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
      </ul>
    </header>
  </div>
    );

}

export default Header;