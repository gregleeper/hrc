import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LegendsFieldImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bob-sosa-building.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default LegendsFieldImage;
