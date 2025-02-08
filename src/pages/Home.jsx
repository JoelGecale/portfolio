import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  const [displayDetails, setDisplayDetails] = useState(0);

  const menuClick = (item) => {
    console.log(item);
    setDisplayDetails(item);
  };

  return (
    <div className="d-flex align-items-start mx-5 gap-3">
      <div className="col-3 d-flex flex-column gap-3 align-items-start">
        <Sidebar handleClick={menuClick} />
      </div>
      <div className="col-9">
        {displayDetails == 1 && <About handleClick={menuClick}/>}
        {displayDetails == 2 && <Skills />}
        {displayDetails == 3 && <Projects />}
        {displayDetails == 4 && <Contact />}
      </div>
    </div>
  );
};

export default Home;
