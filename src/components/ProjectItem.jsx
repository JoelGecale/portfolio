import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    
      <div className="col">
        <Link to={props.projectItem.link} target={props.projectItem.link && "_blank"}>
          <div className="card h-100 glass">
            <img src={"./assets/images/" + props.projectItem.image} className="card-img-top" alt={props.projectItem.title} />
            <div className="card-body">
              <h5 className="card-title">{props.projectItem.title}</h5>
              <p className="card-text">
                {props.projectItem.description}
              </p>
            </div>
            <div className="card-footer">
              {props.projectItem.tools.map((tool) => <img className="tool me-2" src={"./assets/images/" + tool + ".png"}></img>)}
            </div>
          </div>
        </Link>
      </div>
  );
};

export default ProjectItem;
