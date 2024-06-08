import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Expertise</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Crochet</h3>
              <p>
                We specialize in creating exquisite crochet pieces for various
                needs. Our team offers custom crochet designs made to order.
                Contact us to place an order for unique and handcrafted crochet
                items.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Knitting</h3>
              <p>
                We are experts in crafting beautiful and warm knitted products.
                Our knitting services include bespoke designs tailored to your
                preferences. Reach out to us to order personalized and handmade
                knitted items.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
