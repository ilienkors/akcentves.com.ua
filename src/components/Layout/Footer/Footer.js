import React from "react";
import { Link } from "gatsby";

import * as styles from "./footer.module.scss";

const Footer = ({ phoneNumbersList }) => (
  <footer className={styles.footer}>
    <nav>
      <ul className={styles.navMenu}>
        <li><Link to="/" className={styles.footerItem}>Главная</Link></li>
        <li><Link to="/about" className={styles.footerItem}>О нас</Link></li>
        <li><Link to="/works" className={styles.footerItem}>Наши работы</Link></li>
        <li><Link to="/contacts" className={styles.footerItem}>Контакты</Link></li>
      </ul>
    </nav>

    <section className={styles.contacts}>
      {phoneNumbersList.map((phoneNumber, i) =>
        <a
          key={'fp' + i}
          className={styles.footerItem}
          href={'tel:' + phoneNumber}
        >
          {phoneNumber}
        </a>
      )}
    </section>
  </footer>
);

export default Footer;
