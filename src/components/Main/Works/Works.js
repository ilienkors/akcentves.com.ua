import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import * as worksStyles from "./works.module.scss";

const Works = ({ worksImage, worksImageAlt, workDescription }) => (
  <div className={worksStyles.works}>
    <GatsbyImage
      className={worksStyles.worksImage}
      image={worksImage}
      alt={worksImageAlt}
    />
      <p className={worksStyles.description}>{workDescription}</p>
  </div>
);

export default Works;
