import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PoolImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "pool-front.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default PoolImage;
