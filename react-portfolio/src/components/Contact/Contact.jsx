import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:lovely.looms11@gmail.com">Mail Us</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/company/lovely-looms/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/r1.jpeg")}
            alt="Github icon"
            width="50"
            height="50"
          />

          <a href="https://www.instagram.com/lovelylooms._/">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};
