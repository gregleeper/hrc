import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const SummerSports = () => {
  return (
    <SummerSportsWrapper>
      <div className="tile is-parent is-vertical">
        <div className="tile is-child box">
          <h3>Summer Youth Sports</h3>
          <p>
            <strong>Sign ups late May</strong>
          </p>
          <div className="tile is-vertical is-parent">
            <div className="tile is-child box">
              <h3>Archery</h3>
              <p>4th through 8th grade</p>
              <br />
              <p>Beginners: 1st or 2nd year</p>
              <p>Advanced: 3 years or more</p>
            </div>
            <div className="tile is-child box">
              <h3>Tennis</h3>
              <p>1st through 8th grade</p>
              <br />
              <p>Beginners: 1st or 2nd year</p>
              <p>Advanced: 3 years or more</p>
            </div>
            <div className="tile is-child box">
              <h3>Golf</h3>
              <p> 3rd through 8th grade</p>
              <br />
              <p>Beginners: 1st or 2nd year</p>
              <p>Advanced: 3 years or mores</p>
            </div>
            <div className="tile is-child box">
              <h3>SKRA Traveling Junior Golf</h3>
              <p>Ages 8-18</p>
              <p>
                Cost: $10; Participants have the opportunity to play on
                surrounding courses
              </p>
            </div>
            <div className="tile is-child box">
              <h3>Sports Camps</h3>
              <p>
                Information regarding camp dates, times, ages, and cost will be
                available late May
              </p>
              <p>Eagle Football Camp</p>
              <p>Lady Eagle Volleyball Camp</p>
            </div>
          </div>
        </div>
      </div>
    </SummerSportsWrapper>
  );
};

const SummerSportsWrapper = styled.div`
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

export default SummerSports;
