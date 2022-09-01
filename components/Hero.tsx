import React, { FC } from "react";
import styles from "../styles/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Hero: FC = () => {
  return (
    <section className={styles.section_main}>
      <img className={styles.cloud} src="/cloudsvg.svg" alt="" />
      <img className={styles.cloud} src="/cloudsvg.svg" alt="" />
      <div className={`container`}>
        <div className={styles.section_devide}>
          <div className={styles.section_intro}>
            <span>Hello!</span>
            <h1 className={styles.h1}>I am Shafayet Hossain</h1>
            <p className={styles.p}>
              A Front-end Developer with 3+ years of Experience. Let me take you into a deeper experience to make a
              moment a lasting conveyable memory. Let me help build your Website/Web Application .{" "}
            </p>
            <div className="btn_group">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn_primary">
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/shafayet-hossain/"
                target="_blank"
                rel="noreferrer"
                className="btn_secondary with_icon"
              >
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn} width={20} color="#fff" />{" "}
                </span>
                <span> Linkedin</span>
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
