import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import * as contactsStyles from "./contacts.module.scss";

const Contacts = ({ mapImg, mapUrl, phoneNumbersList, address, email }) => {
  return (
    <div className={contactsStyles.contacts} id="contacts">
      <a href={mapUrl} rel="noreferrer" target="_blank" className={contactsStyles.mapImg}>
        <GatsbyImage

          image={mapImg}
          alt={mapUrl}
        />
      </a>
      <div className={contactsStyles.info}>
        <h2>Контакты</h2>
        <div>
          <h3>Адрес</h3>
          <p>{address}</p>
        </div>
        <div>
          <h3>Телефоны</h3>
          {phoneNumbersList.map(phone => <p>{phone}</p>)}
        </div>
        <div>
          <h3>Email</h3>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
