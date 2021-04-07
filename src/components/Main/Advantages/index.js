import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Advatages from "./Advantages";

const AdvantagesIndex = () => {
  const data = useStaticQuery(graphql`
    query AdvantagesQuery {
      allContentfulMain(limit: 1) {
        edges {
          node {
            advantageOne
            advantageTwo
            advantageThree
          }
        }
      }
    }
  `);
  const { advantageOne, advantageTwo, advantageThree } = data.allContentfulMain.edges[0].node;

  return <Advatages
    advantagesList={[
      {
        text: advantageOne
      },
      {
        text: advantageTwo
      },
      {
        text: advantageThree
      }
    ]}
  />;
};

export default AdvantagesIndex;
