import React, {useRef, useImperativeHandle, forwardRef} from "react";
import FormTop from "./FormTop";

const ResumeDetails = (props, ref) => {

    const educationRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);
    const awardsRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            scrollToSection(menuItem){
                switch (menuItem) {
                    case 1:
                        workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                        break;
                    case 2:
                        educationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                        break;            
                    case 3:
                        skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                        break;  
                    case 4:
                        awardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                        break;    
                    default:
                        break;
                }
            }
        }
    });

  return (
    <div className="form glass">
      <FormTop />
      <div className="content fadein">
        <article className="p-5">
          <h2 className="py-2 embossed">Resume</h2>

          <hr ref={workRef}/>
          <h4 className="py-3 embossed">Professional Experience</h4>
          <ul className="ps-5">
            <li className="py-3">
              <h5>MIS Manager</h5>
              <h6>Sharp Philippines Corporation</h6>
              <p>April 16, 2018 to October 20, 2022</p>

              <h6 className="py-2">Key responsibilities:</h6>
              <ul>
                <li>
                  Leads and oversees the MIS Department staff and overall
                  operation.
                </li>
                <li>
                  Ensures the stable performance of the computer systems and
                  infrastructure in place in order to minimize the downtime to
                  the business.
                </li>
                <li>
                  Coordinates with top management on projects that are aligned
                  with the overall company direction and objectives.
                </li>
                <li>
                  Proposes and manages projects related to system upgrades or
                  process automation that helps in improving the overall
                  operation of the company.
                </li>
              </ul>
            </li>
            <li className="py-3">
              <h5>IT Specialist</h5>
              <h6>Goodyear Philippines, Inc.</h6>
              <p>June 1, 2014 to April 13, 2018</p>

              <h5 className="pt-2">CS Analyst/Programmer</h5>
              <p>September 16, 2008 to May 31, 2014</p>

              <h6 className="py-2">Key responsibilities:</h6>
              <ul>
                <li>
                  Develops systematic solutions to improve business processes
                  affecting efficiency, cost and quality.
                </li>
                <li>
                  Gathers and analyzes business requirements for the development
                  of appropriate solutions.
                </li>
                <li>
                  Updates SOX documents and conduct regular testing to ensure
                  that necessary controls are in place.
                </li>
                <li>
                  Local IT Lead for rollout of projects initiated from the
                  Global or Regional level.
                </li>
              </ul>
            </li>
            <li className="py-3">
              <h5>Systems Developer / Programmer</h5>
              <h6>Infiniti Solutions Phils. Ltd. Inc.</h6>
              <p>June 20, 2007 to September 15, 2008</p>

              <h6 className="py-2">Key responsibilities:</h6>
              <ul>
                <li>
                  Analyzes and develops in-house application systems and tools
                  as required by customers.
                </li>
                <li>
                  Creates and/or customizes reports as required by internal and
                  external customers.
                </li>
                <li>
                  Implements backup and restore system for SQL 2000 databases.
                </li>
                <li>Maintains the data mart.</li>
              </ul>
            </li>
            <li className="py-3">
              <h5>Conversion Specialist Lead</h5>
              <h6>Photocircuits Phils., Inc.</h6>
              <p> July 3, 2006 to March 9, 2007</p>

              <h5 className="pt-2">Conversion Specialist</h5>
              <p>October 2002 to July 2, 2006</p>

              <h5 className="pt-2">Technical Specialist</h5>
              <p>June 10, 2002 to October 2002</p>

              <h6 className="py-2">Key responsibilities:</h6>
              <ul>
                <li>
                  Audits and approves wheel templates that can be used by the
                  group for future jobs.
                </li>
                <li>
                  Audits and approves conversions done by subordinates to ensure
                  good quality of work.
                </li>
                <li>
                  Assists in training and mentoring of new conversion
                  specialists.
                </li>
                <li>
                  Make recommendations to management concerning formation of
                  policy and the training and supervision of personnel to
                  include independent assessment and judgments concerning
                  employee performance, hiring, termination & discipline.
                </li>
              </ul>
            </li>
          </ul>

          <hr ref={skillsRef}/>
          <h4 className="py-3 embossed">Relevant Skills</h4>
          <ul className="ps-5">
            <li className="py-2">
              <h5>Web Development</h5>
              <p>HTML, CSS, Javascript, Bootstrap, Tailwind, Node.js, Express, ReactJS</p>
            </li>
            <li className="py-2">
              <h5>Desktop Programming</h5>
              <p>VB.Net, VBA</p>
            </li>
            <li className="py-2">
              <h5>Database</h5>
              <p>MS SQL Server, MySQL, PostgreSQL</p>
            </li>
            <li className="py-2">
              <h5>Others</h5>
              <p>
                Experience in application support for MS Windows, MS Office 365,
                SAP ERP, SAP BEx, SAP DP and SAP CRM.
              </p>
            </li>
          </ul>

          <hr ref={educationRef}/>
          <h4 className="py-3 embossed">Educational Background</h4>
          <ul className="ps-5">
            <li className="py-2">
              <h5>Bachelor of Science in Computer Science</h5>
              <h6>Laguna College of Business and Arts</h6>
              <p>1998 to 2002</p>
            </li>
            <li className="py-2">
              <h5>Secondary Education</h5>
              <h6>University of the Philippines Rural High School</h6>
              <p>1993 to 1997</p>
            </li>
          </ul>

          <hr ref={awardsRef}/>
          <h4 className="py-3 embossed">Awards and Certifications</h4>
          <ul className="ps-5">
            <li className="py-2">
              <h5>Continuous Improvement System (CIS) Activist of the Year</h5>
              <h6>Goodyear Philippines, Inc.</h6>
              <p>2009</p>
            </li>
            <li className="py-2">
              <h5>Employee of the Month Awardee</h5>
              <h6>Goodyear Philippines, Inc.</h6>
              <p>July 2010</p>
            </li>
            <li className="py-2">
              <h5>Customer Service Awardee</h5>
              <h6>Goodyear Philippines, Inc.</h6>
              <p>2017</p>
            </li>
          </ul>

          <hr />
        </article>
      </div>

      <div className="form-bottom fixed-bottom"></div>
    </div>
  );
};

export default forwardRef(ResumeDetails);
