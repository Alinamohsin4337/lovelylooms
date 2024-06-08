import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className>Hi,Welcome to Lovely Looms</h1>
        <br />
        <p>
          Where love and care are woven into every stitch. As a passionate
          crocheters/knitters, we create unique, handmade items for babies,
          adults, and collectors. Our mission is to provide cozy, high-quality
          products that bring joy and warmth to your life. I use sustainable
          materials and take pride in every detail. Explore my website to
          discover my latest creations, l earn about my process, and let's
          get cozy together!
        </p>
        <br />
        <a
          href="https://www.instagram.com/lovelylooms._/"
          className={styles.contactBtn}
        >
          Contact Us
        </a>
      </div>
      <img
        src={getImageUrl("hero/1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        width="300"
        height="300"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
