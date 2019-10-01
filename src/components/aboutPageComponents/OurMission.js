import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const OurMission = () => {
  return (
    <OurMissionWrapper>
      <h3>Our Mission</h3>
      <p>
        Hugoton Recreation Commission, a tax supported organization, endeavors
        to contribute to the recreational needs of our community through
        development, coordination, funding and instruction of a variety of
        interest-based activities for residents of all ethnic background, age
        and ability.
      </p>
    </OurMissionWrapper>
  );
};

const OurMissionWrapper = styled.div`
  h3 {
    color: ${styles.colors.mainRed};
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  p {
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  span {
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    p {
      text-align: center;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
`;

export default OurMission;
