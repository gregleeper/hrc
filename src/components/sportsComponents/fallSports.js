import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const FallSportsData = () => {
  return (
    <FallSportsWrapper>
      <h3>Fall Youth Sports</h3>
      <p>
        <strong>Sign ups mid-August</strong>
      </p>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Volleyball</h3>
            <p>Grades 3rd through 6th</p>
            <p>Cost: $15 includes team shirt and knee pads</p>
          </div>
          <div className="tile is-child box">
            <h3>Fall Youth Soccer</h3>
            <p>Co-Ed Kindergarten through 2nd grade</p>
            <p>Cost: $15 includes team shirt and shin guards</p>
          </div>
        </div>
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Tackle Football</h3>
            <p>3rd through 6th grade</p>
            <p>
              Cost: $25 program fee <br /> $25 rental deposit-returned upon
              equipment check in
            </p>
          </div>
        </div>
      </div>
    </FallSportsWrapper>
  );
};

const FallSportsWrapper = styled.div`
  h3 {
    color: ${styles.colors.mainRed};
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  h6 {
    color: ${styles.colors.mainBlue};
    font-size: 1.1rem;
    text-align: center;
    margin-top: 0.4rem;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  p {
    text-align: center;
  }
  span {
    font-size: 0.75rem;
  }
  margin-bottom: 3rem;
`;

export default FallSportsData;
