import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Banner from "./banner";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bobSosa: file(relativePath: { eq: "bob-sosa-building.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.bobSosa.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Banner
            title="Hugoton Recreation Commission"
            subtitle="Proudly supporting the community of Hugoton"
          />
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height: calc(70vh - 52px);
  background-repeat: repeat-y;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
`;

export default StyledBackgroundSection;

// import React from "react";
// import Image from "gatsby-background-image";
// import styled from "styled-components";
// import BobSosaImage from "../components/facilitiesComponents/bobSosaImage";

// const Header = ({ img, children }) => {
//   return (
//     <Image>
//       <BobSosaImage />
//     </Image>
//   );
// };

// // const IndexHeader = styled.header`
// //   min-height: calc(45vh - 52px);
// //   left: 0;
// //   right: 0;
// //   background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
// //     url(${props => props.img}) center/cover fixed no-repeat;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// export default Header;
