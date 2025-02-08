import React, { useRef } from "react";
import ResumeSidebar from "../components/ResumeSidebar";
import ResumeDetails from "../components/ResumeDetails";

const Resume = () => {

  const sectionRef = useRef(null);

  const handleClick = (menuItem) => {
    sectionRef.current.scrollToSection(menuItem);
  }

  return (
    <div className="d-flex align-items-start mx-5 gap-3">
      <div className="col-3 d-flex flex-column gap-3 align-items-start">
        <ResumeSidebar menuClick={handleClick} />
      </div>
      <div className="col-9">
        <ResumeDetails ref={sectionRef} />
      </div>
    </div>
  );
};

export default Resume;
