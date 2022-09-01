import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styles from "../styles/Home.module.css";

const projects = [
  {
    name: "Doom Cars",
    image_path: "/doom.jpg",
    desc: "This is a Simple E-commerce Web Application. Below are the featrues you can do with this application",
    features: ["Authentication", "Product Purchase", " Simple Admin Dashboard"],
    techs: "React, ContextAPI, Firebase, Node.js, MongoDB",
    live: "https://doom-cars.web.app/",
    github: "https://github.com/shafayet035/doomcar",
  },
  {
    name: "Amazon Clone",
    image_path: "/amazon.png",
    desc: "Another E-commerce Application with Payment System Intrigated",
    features: ["Authentication", "Product Purchase", "Stripe Payment Intrigated"],
    techs: "React, Redux, Firebase, Node.js, Stripe",
    live: "https://e-clone-2c81e.web.app/",
    github: "https://github.com/shafayet035/amazone-clone",
  },
];

const Project = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section_title">Featured Projects</h2>
        {projects.map((p) => (
          <SingleProject
            key={p.name}
            name={p.name}
            image_path={p.image_path}
            desc={p.desc}
            features={p.features}
            github={p.github}
            live={p.live}
            techs={p.techs}
          />
        ))}
      </div>
    </section>
  );
};

interface Project {
  name: string;
  image_path: string;
  desc: string;
  features: string[];
  techs: string;
  live: string;
  github: string;
}

const SingleProject: FC<Project> = ({ name, image_path, desc, features, techs, live, github }: Project) => {
  return (
    <div className={styles.course_box}>
      <div>
        <img src={image_path} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul>
          {features.map((f) => (
            <li key={f}>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              {f}
            </li>
          ))}
        </ul>
        <p>Techs: React, ContextAPI, Firebase, Node.js, MongoDB</p>
        <div className="btn_group">
          <a href={live} target="_blank" className="btn_primary">
            Live Site
          </a>
          <a href={github} target="_blank" className="btn_secondary">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
