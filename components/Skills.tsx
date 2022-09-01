import React, { FC } from "react";
import styles from "../styles/Home.module.css";

const Skills: FC = () => {
  return (
    <>
      <section className="body_section">
        <div className="container">
          <h2 className="section_title">My Skills</h2>
          <div className={styles.skills_parent}>
            <ul className={styles.skill_list}>
              <li className={styles.list_title}>Front-end</li>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>APIs</li>
            </ul>
            <ul className={styles.skill_list}>
              <li className={styles.list_title}>Back-end</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT</li>
              <li>Firebase</li>
            </ul>
            <ul className={styles.skill_list}>
              <li className={styles.list_title}>Tools and Familiarity</li>
              <li>WordPress</li>
              <li>Git/Github</li>
              <li>Figma UI Design</li>
              <li>VSCode</li>
              <li>Linux</li>
              <li>Google Tag Manager</li>
              <li>Facebook Business</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </section>
      <hr style={{ width: "70%" }} />
    </>
  );
};

export default Skills;
