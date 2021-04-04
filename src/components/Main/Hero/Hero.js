import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import * as heroStyles from "./hero.module.scss";

const Hero = ({ heroImage, heroImageAlt, title, subtitle }) => {
  return (
    <div className={heroStyles.hero}>
      <GatsbyImage
        className={heroStyles.heroImg}
        image={heroImage}
        alt={heroImageAlt}
      />
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.heroTitle}>{title}</h1>
        <h2 className={heroStyles.heroSubtitle}>{subtitle}</h2>
      </div>
    </div>
  );
}

export default Hero;
