import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Banner from "./banner";

const BackgroundSection = ({
  objFit = `cover`,
  objPosition = `50% 50%`,
  Children,
  className,
  ...props
}) => (
  <StaticQuery
    query={graphql`
      query {
        bobSosa: file(relativePath: { eq: "bob-sosa-building.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.bobSosa.childImageSharp.fluid;
      return (
        <StyledWrapper>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#000`}
            classId="gbi"
            imgStyle={{
              objectFit: objFit,
              objectPosition: objPosition,
              fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`
            }}
          >
            {Children}
            <Banner
              title="Hugoton Recreation Commission"
              subtitle="Proudly supporting the community of Hugoton"
            />
          </BackgroundImage>
        </StyledWrapper>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  min-height: calc(70vh - 52px);
  background-repeat: repeat-y !important;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat !important;
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-background-image-gbi:after {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${props => props.img}) center/cover fixed no-repeat !important;
    z-index: -2;
  }
`;

const StyledWrapper = styled.div`
  .gatsby-background-image-gbi:after {
    background-repeat: repeat-y !important;
    z-index: -3;
  }
`;

export default StyledBackgroundSection;
