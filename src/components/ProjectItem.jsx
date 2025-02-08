import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    
      <div class="col">
        <Link to={props.projectItem.link} target={props.projectItem.link && "_blank"}>
          <div class="card h-100 glass">
            <img src={"./assets/images/" + props.projectItem.image} class="card-img-top" alt={props.projectItem.title} />
            <div class="card-body">
              <h5 class="card-title">{props.projectItem.title}</h5>
              <p class="card-text">
                {props.projectItem.description}
              </p>
            </div>
            <div class="card-footer">
              {props.projectItem.tools.map((tool) => <img className="tool me-2" src={"./assets/images/" + tool + ".png"}></img>)}
            </div>
          </div>
        </Link>
      </div>
  );
};

export default ProjectItem;
