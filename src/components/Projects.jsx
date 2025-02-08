import React from "react";
import ProjectItem from "./ProjectItem";
import FormTop from "./FormTop";

const Projects = () => {
  const projectItems = [
    {
      title: "Hope of Glory Christian Church Website",
      description:
        "This is a website designed for our local church. This aims to promote the church by providing a medium to present their vision, mission and ministry.",
      image: "HGCC.jpg",
      tools: ["html", "css", "js", "bootstrap", "react"],
      link: "https://joelgecale.github.io/hopeofglory/#",
    },
    {
      title: "Battleship",
      description:
        "A web app that simulates the battleship board game. The player goes up against the computer where they try to win by guessing the location of the opponent's ships on the grid.",
      image: "battleship.png",
      tools: ["html", "css", "js", "bootstrap", "react"],
      link: "https://battleship-2mfx.onrender.com/",
    },
    {
      title: "HGCSC Website",
      description:
        "This is a website designed for a local private school which aims for them to be more visible and to have an additional platform to post updates with regards to their operations.",
      image: "HGCSC.png",
      tools: ["html", "css", "python", "react", "wagtail"],
      link: "",
    },
    {
      title: "Billing Adjustment Collection System",
      description:
        "An application developed using VB.Net with MS Access database. This application was developed as a process improvement project for a branch of a power company. It aids the team on their daily monitoring of delinquent accounts.",
      image: "BACS.png",
      tools: ["vbnet", "access"],
      link: "",
    },
    {
      title: "Silicon Trading Inventory System",
      description:
        "An application built using VB.Net with MySQL database. Mainly handles Material Management (Purchasing and Goods Movement), Sales Processing and Reporting.",
      image: "STIS.png",
      tools: ["vbnet", "mysql"],
      link: "",
    },
  ];

  return (
    <div className="form glass">
      <FormTop />
      <div className="content fadein">
        <article className="p-5">
          <h2 className="py-2 embossed">Sample Projects</h2>
          <hr />
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projectItems.map((projectItem) => (
              <ProjectItem projectItem={projectItem} />
            ))}
          </div>
          <hr />
        </article>
      </div>
      <div className="form-bottom fixed-bottom"></div>
    </div>
  );
};

export default Projects;
