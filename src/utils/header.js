import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Banner from "./banner";

const BackgroundSection = ({
  objFit = `cover`,
  objPosition = `50% 50%`,
  children,
  className,
  ...props
}) => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "tball-games.jpg" }) {
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
      const imageData = data.header.childImageSharp.fluid;
      return (
        <StyledWrapper>
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageData}
            classId="gbi"
            style={{
              position: `relative`
            }}
            imgStyle={{
              objectFit: objFit,
              objectPosition: objPosition,
              fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`
            }}
          >
            {children}
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

  display: flex;
  align-items: center;
  justify-content: center;
  .gatsby-background-image-gbi:before {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${props => props.img}) center/cover fixed no-repeat !important;
  }
  .gatsby-background-image-gbi:after {
    background-repeat: repeat-y !important;
  }
`;

const StyledWrapper = styled.div`
  .gatsby-background-image-gbi:before {
    background-repeat: repeat-y !important;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    opacity: 0.4;
  }
`;

export default StyledBackgroundSection;
