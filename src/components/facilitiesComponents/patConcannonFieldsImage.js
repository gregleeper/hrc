import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PatConcannonFieldsImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "pat-concannon-field.jpg" }
        ) {
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
export default PatConcannonFieldsImage;
