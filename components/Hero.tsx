import React, { FC } from "react";
import styles from "../styles/Hero.module.css";

const Hero: FC = () => {
  return (
    <section className={styles.section_main}>
      <div className="container">
        <div className={styles.section_intro}>
          <span>Hello!</span>
          <h1 className={styles.h1}>I'm Shafayet Hossain</h1>
          <p>
            A Front-end Developer. Let me take you into a deeper experience to make a moment a lasting conveyable
            memory. Let me help build your Website/Web Application.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
