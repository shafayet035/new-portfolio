import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Home.module.css";

const Work = () => {
  return (
    <section className="body_section">
      <div className="container">
        <h2 className="section_title text_center">Work Experience</h2>
        <p className="text_center title_desc">
          As a Front-end Developer i have worked remotely with international companies and clients fo 3 Years+. Below
          are my professional work experience
        </p>

        {/* // Online Business Media  */}

        <div className={styles.work_box}>
          <h3>
            Online Business Media Netherlands{" "}
            <a href="https://obmn.nl" target="_blank">
              <FontAwesomeIcon width={20} icon={faExternalLink} color="white" />
            </a>
          </h3>
          <i>Aug 2021 to Present</i>
          <p className={styles.work_exp_desc}>
            I Joined the Company as an independent contractor as a Front-end Developer. My main responsibilities is to
            develop user interfaces and brainstrom ideas.
          </p>
          <ul className={styles.work_responsibilites}>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" /> Used React Echo System for creating
              frontend Applications
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Built Websites using HTML/CSS/JavaScript and React
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Increased Performance of Websites (Scored 90+ on GTmetrix)
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Reviewing application requirements and interface designs.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Meeting with the Project Manager and team to discuss user interface ideas and applications.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Collaborating with Back-end Developers to discuss and create features.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Troubleshooting interface software and debugging application codes.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Documenting application changes and developing updates.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Worked on Google Tag manager and Facebook Business to Setup Facebook Pixels.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Built Business Website using WordPress and Increased Performance of the websites.
            </li>
          </ul>
        </div>

        {/* // Kreiger Business Assistance  */}
        <div className={styles.work_box}>
          <h3>
            Kreiger Business Assistance{" "}
            <a href="http://kba-home.com/" target="_blank">
              <FontAwesomeIcon width={20} icon={faExternalLink} color="white" />
            </a>
          </h3>
          <i>Oct 2019 to Aug 2021 - (2 Years)</i>
          <p className={styles.work_exp_desc}>
            I Joined the Company as a Website Developer and then later Promoted to Manager.
          </p>
          <ul className={styles.work_responsibilites}>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" /> Used React and Node.js to Built Inventory
              Dashboard Application.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" /> Developed MVP products for company.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Built Websites using WordPress and HTML/CSS/JavaScript.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Increased Performance of Websites (Scored 90+ on GTmetrix)
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Collaborating with Clients to understand and develop Features and products.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Regular Meeting with Teams and CEO for Updates and Discussing features.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Maintained, Update, Bug Fixing for clients websites and products.
            </li>
            <li>
              {" "}
              <FontAwesomeIcon width={15} icon={faArrowRight} color="white" />
              Researched and Worked with Various third party API.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
