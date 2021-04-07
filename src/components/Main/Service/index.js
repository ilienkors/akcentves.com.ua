import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Service from "./Service";

const ServiceIndex = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allContentfulMain {
        edges {
          node {
            featuredServices {
              serviceImage {
                gatsbyImageData(layout: FULL_WIDTH)
                description
              }
              serviceTitle
              serviceShortDescription
            }
          }
        }
      }
    }
  `);
  const featuredServices = data.allContentfulMain.edges[0].node.featuredServices;

  return <Service featuredServices={featuredServices} />
};

export default ServiceIndex;
