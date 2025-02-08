import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
<div class="container-fluid">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 px-5 border-bottom fixed-top">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4 logo">Joel Gecale</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
        <li class="nav-item"><Link to="/resume" class="nav-link">Resume</Link></li>
      </ul>
    </header>
  </div>
    );

}

export default Header;