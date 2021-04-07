import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Works from "./Works";

const WorksIndex = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allContentfulMain(limit: 1) {
        edges {
          node {
            workDescriptionImg {
              gatsbyImageData(height: 150)
              description
            }
            workDescription {
              workDescription
            }
          }
        }
      }
    }
  `);
  const worksImage = getImage(data.allContentfulMain.edges[0].node.workDescriptionImg)
  const worksImageAlt = data.allContentfulMain.edges[0].node.workDescriptionImg.description;
  const { workDescription } = data.allContentfulMain.edges[0].node.workDescription;

  return <Works
    worksImage={worksImage}
    worksImageAlt={worksImageAlt}
    workDescription={workDescription}
  />;
};

export default WorksIndex;
