import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Contacts from "./Contacts";

const ContactsIndex = () => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      allContentfulContacts {
        edges {
          node {
            phoneNumbersList
            staticMapImg {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            address
            email
            googleMapCodeLong {
              googleMapCodeLong
            }
          }
        }
      }
    }
  `);
  const mapImg = getImage(data.allContentfulContacts.edges[0].node.staticMapImg)
  const mapUrl = data.allContentfulContacts.edges[0].node.googleMapCodeLong.googleMapCodeLong;
  const phoneNumbersList = data.allContentfulContacts.edges[0].node.phoneNumbersList;
  const address = data.allContentfulContacts.edges[0].node.address;
  const email = data.allContentfulContacts.edges[0].node.email;

  return <Contacts
    mapImg={mapImg}
    mapUrl={mapUrl}
    phoneNumbersList={phoneNumbersList}
    address={address}
    email={email}
  />;
};

export default ContactsIndex;
