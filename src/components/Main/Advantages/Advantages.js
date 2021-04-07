import React from "react";

import * as advantagesStyles from "./advantages.module.scss";

import SingleAdvantage from "./SingleAdvantage";

const Advantages = ({ advantagesList }) => (
  <div className={advantagesStyles.advantages}>
    <h2 className={advantagesStyles.title}>Преимущества</h2>
    <div className={advantagesStyles.advantagesList}>
      {advantagesList.map((advantage, index) =>
        <SingleAdvantage key={'advantage' + index} info={advantage} />)
      }
    </div>
  </div>
);

export default Advantages;
