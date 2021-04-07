import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Hero from "./Hero";

const HeroIndex = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulMain(limit: 1) {
        edges {
          node {
            title
            subtitle
            heroImg {
              gatsbyImageData(layout: FULL_WIDTH)
              description
            }
          }
        }
      }
    }
  `);
  const heroImage = getImage(data.allContentfulMain.edges[0].node.heroImg)
  const heroImageAlt = data.allContentfulMain.edges[0].node.heroImg.description;
  const { title, subtitle } = data.allContentfulMain.edges[0].node;

  return <Hero
    heroImage={heroImage}
    heroImageAlt={heroImageAlt}
    title={title}
    subtitle={subtitle}
  />;
}

export default HeroIndex;
