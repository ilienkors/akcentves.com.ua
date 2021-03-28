import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Footer from "./Footer";

const FooterIndex = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulContacts(limit: 1) {
        edges {
          node {
            phoneNumbersList
          }
        }
      }
    }  
  `)
  const { phoneNumbersList } = data.allContentfulContacts.edges[0].node;

  return <Footer phoneNumbersList={phoneNumbersList} />
};

export default FooterIndex;
