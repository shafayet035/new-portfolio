import React, { FC } from "react";
import styles from "../styles/Hero.module.css";

const Hero: FC = () => {
  return (
    <section className={styles.section_main}>
      <div className={`container`}>
        <div className={styles.section_devide}>
          <div className={styles.section_intro}>
            <span>Hello!</span>
            <h1 className={styles.h1}>I'm Shafayet Hossain</h1>
            <p className={styles.p}>
              A Front-end Developer. Let me take you into a deeper experience to make a moment a lasting conveyable
              memory. Let me help build your Website/Web Application.{" "}
            </p>
            <div className="btn_group">
              <button className="btn_primary">Download Resume</button>
              <a href="#contact" className="btn_secondary">
                Contact Me
              </a>
            </div>
          </div>
          <img className={styles.img} src="/hero_img.svg" alt="Section Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
