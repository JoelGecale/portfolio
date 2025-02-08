import React from "react";
import Hero from "./Hero";
import FormTop from "./FormTop";
import {Link} from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <div class="d-flex flex-column flex-nowrap py-5 glass form">
        <FormTop />
        <div className="content fadein">
            <Hero handleClick={props.handleClick}/>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto ps-4">
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" onClick={ () => props.handleClick(1)}>
                About Me
                </Link>
            </li>
            <li>
                <Link class="nav-link"  onClick={ () => props.handleClick(2)}>
                Skills
                </Link>
            </li>
            <li>
                <Link class="nav-link" onClick={ () => props.handleClick(3)}>
                Projects
                </Link>
            </li>
            <li>
                <Link class="nav-link" onClick={ () => props.handleClick(4)}>
                Contact Details
                </Link>
            </li>
            </ul>
            <hr />
        </div>
        <div className="form-bottom fixed-bottom"></div>
      </div>
    </>
  );
};

export default Sidebar;
