import React from "react";
import { Link } from "react-router-dom";
import FormTop from "./FormTop";

const ResumeSidebar = (props) => {
  return (
    <>
      <div className="d-flex flex-column flex-nowrap py-5 glass form">
        <FormTop />
        <div className="content fadein">
          <div className="d-flex flex-column justify-content-center text-center align-items-center pb-3 mb-3">
            <img
              src="./assets/images/photo.png"
              alt="profile picture"
              className="profile border border-2 rounded-circle my-2"
            />
            <h5>Joel Gecale</h5>
            <h6>Full Stack Web Developer</h6>
          </div>
          <hr />

          <ul className="nav nav-pills flex-column mb-auto ps-4">
            <li className="nav-item">
              <Link
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  props.menuClick(1);
                }}
              >
                Professional Experience
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  props.menuClick(3);
                }}
              >
                Relevant Skills
              </Link>
            </li>

            <li>
              <Link
                className="nav-link"
                aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  props.menuClick(2);
                }}
              >
                Educational Background
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  props.menuClick(4);
                }}
              >
                Awards and Certifications
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

export default ResumeSidebar;
