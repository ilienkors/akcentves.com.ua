import React from "react";

import SingleService from "./SingleService";

import * as serviceStyles from "./service.module.scss";

const Service = ({ featuredServices }) => {

  return (
    <div className={serviceStyles.service}>
      <h2 className={serviceStyles.title}>Услуги</h2>
      <div className={serviceStyles.featuredServices}>
        {featuredServices.map(service => (
          <SingleService data={service} />
        ))}
      </div>
    </div>
  )
};

export default Service;
