import React from "react";

import * as singleAdvantageStyles from "./singleAdvantage.module.scss";

const SingleAdvantage = ({ info }) => (
  <div className={singleAdvantageStyles.singleAdvantage}>
    <p className={singleAdvantageStyles.text}>{info.text}</p>
  </div>
);

export default SingleAdvantage;
