import React from "react";
import FormTop from "./FormTop";

const Skills = () => {
  return (
    <div className="form glass">
      <FormTop />
      <div className="content fadein">
        <article className="p-5">
          <h2 className="py-2 embossed">Skills</h2>
          <hr />
          <ul>
            <li className="py-2">
              <p>Web Development</p>
              <div className="d-flex gap-3 pb-3">
                <img src="./assets/images/html.png" className="icon"></img>
                <img src="./assets/images/css.png" className="icon"></img>
                <img src="./assets/images/js.png" className="icon"></img>
                <img src="./assets/images/bootstrap.png" className="icon"></img>
                <img src="./assets/images/tailwind.png" className="icon"></img>
                <img src="./assets/images/node.png" className="icon"></img>
                <img src="./assets/images/express.png" className="icon"></img>
                <img src="./assets/images/react.png" className="icon"></img>
              </div>
            </li>
            <li className="py-2">
              <p>Desktop Programming</p>
              <div className="d-flex gap-3 pb-3">
                <img src="./assets/images/vbnet.png" className="icon"></img>
                <img src="./assets/images/vba.png" className="icon"></img>
              </div>
            </li>
            <li className="py-2">
              <p>Database</p>
              <div className="d-flex gap-3 pb-3">
                <img src="./assets/images/mssql.png" className="icon"></img>
                <img src="./assets/images/mysql.png" className="icon"></img>
                <img
                  src="./assets/images/postgresql.png"
                  className="icon"
                ></img>
                <img src="./assets/images/access.png" className="icon"></img>
              </div>
            </li>
          </ul>
          <hr />
        </article>
      </div>
      <div className="form-bottom fixed-bottom"></div>
    </div>
  );
};

export default Skills;
