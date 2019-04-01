import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BobSosaImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bob-sosa-full.jpg" }) {
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
export default BobSosaImage;
