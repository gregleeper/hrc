import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">{subtitle}</h1>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;
  .title {
    font-size: 2rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.35rem" })};
    border-style: solid;
    border-width: thick;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .subtitle {
    ${styles.textSlanted};
  }
`;

Banner.defaultProps = {
  title: "Default Title",
  subtitle: "Default subtitle"
};

export default Banner;
