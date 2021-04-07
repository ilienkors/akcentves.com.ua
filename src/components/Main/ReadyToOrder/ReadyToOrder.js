import { Link } from "gatsby";
import React from "react";

import * as readyToOrderStyles from "./readyToOrder.module.scss";

const ReadyToOrder = () => (
  <div className={readyToOrderStyles.readyToOrder}>

    <h2 className={readyToOrderStyles.title}>Уже готовы сделать заказ?</h2>
    <h3 className={readyToOrderStyles.subtitle}>Свяжитесь с нами всего в один клик!</h3>
    <Link to={"#contacts"}>
      <button className={readyToOrderStyles.orderBtn}>Заказать</button>
    </Link>
  </div>
);

export default ReadyToOrder;
