import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import * as singleServiceStyles from "./singleservice.module.scss";

const SingleService = ({ data }) => (
  <div className={singleServiceStyles.singleService}>
    <GatsbyImage
      image={getImage(data.serviceImage)}
      alt={data.serviceImage.description}
    />
    <div className={singleServiceStyles.text}>
      <h3 className={singleServiceStyles.title}>{data.serviceTitle}</h3>
      <p className={singleServiceStyles.shortDescription}>{data.serviceShortDescription}</p>
    </div>
  </div>
);

export default SingleService;
