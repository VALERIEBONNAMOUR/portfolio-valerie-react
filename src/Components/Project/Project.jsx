import React from "react";
import "./Project.css";

import ninaCarducci from "../../assets/nina_carducci.webp";
import ohmyfood from "../../assets/ohmyfood.webp";
import cjaMaubec from "../../assets/cja_maubec.webp";
import menuQwenta from "../../assets/menu_qwenta.webp";
import printIt from "../../assets/print_it.webp";
import bvMarketing from "../../assets/bvmarketing.webp";

const projects = [
  { name: "Nina Carducci",
    link: "https://valeriebonnamour.github.io/ninacarducci/",
    image: ninaCarducci,
    tags : ["Lighthouse", "SEO", "Wave"] },
  { name: "Ohmyfood",
     link: "https://valeriebonnamour.github.io/P4-Ohmyfood/", 
     image: ohmyfood,
    tags :["HTML", "CSS", "SAS"] },
  { name: "CJA de MAUBEC", 
    link: "https://cjamaubec38.fr/", 
    image: cjaMaubec,
tags :["Wordpress", "CSS", "Photoshop"] },
  { name: "Menu Qwenta", 
    link: "https://www.notion.so/293a5c4e6f44803d994de62f97f6afc9?v=293a5c4e6f448153a137000cbf92b7a4&source=copy_link",
     image: menuQwenta,
    tags : ["Notion", "Agile", "Inoreader"] },
  { name: "Print it",
     link: "https://valeriebonnamour.github.io/PROJET-5/", 
     image: printIt,
    tags : ["Javascript", "Dom/Events"] },
  { name: "BV Marketing", 
    link: "#", 
    image: bvMarketing,
tags : ["Photoshop", "Illustrator", "Dreamweaver"] },
];

const Project = () => {
  return (
    <div className="project-section" id="projets">
      <h2>Projets</h2>
      <p>Ci-dessous des exemples de projets réalisés durant ma formation et mon parcours professionnel</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.name} />
            </div>
         
             <div className="project-name">
              <span className="project-title">{project.name}</span>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
