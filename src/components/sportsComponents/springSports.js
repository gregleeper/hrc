import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const SpringSports = () => {
  return (
    <SpringSportsWrapper>
      <div className="tile is-parent is-vertical">
        <div className="tile is-child box">
          <h3> Spring Youth Sports </h3>
          <div className="tile is-vertical is-parent">
            <div className="tile is-child box">
              <h3> Youth Soccer </h3>
              <p> Co - Ed Grades 3rd through 6th </p>
              <p>
                {" "}
                <strong>Sign ups begin early March</strong>{" "}
              </p>
              <p> $15, includes team shirt and shin guards </p>
            </div>
            <div className="tile is-child box">
              <h3> Baseball </h3> <h6> Machine Pitch </h6> <p> Ages 7 - 9 </p>
              <h6> Cal Ripken </h6> <p> Ages 10 - 12 </p>
              <p> $15, includes pants, team shirt & hat </p>
              <p> $10, includes shirt & hat only </p> <h6> Babe Ruth </h6>
              <p> Ages 13 - 15 </p>{" "}
              <p> $20, includes pants, team shirt & hat </p>
              <p> $10, includes shirt & hat only </p>
              <br />
              <p>
                <strong>Sign ups begin mid-April</strong>
              </p>
              <p>
                Birthday cutoff is April 30. Must provide copy of birth
                certificate.
              </p>
            </div>
            <div className="tile is-child box">
              <h3>Softball</h3>
              <h6>Pee Wee Softball</h6>
              <p>Grades 1st-3rd</p>
              <h6>Junior Softball</h6>
              <p>Grades 4th-6th</p>
              <p>$10, includes team shirt & hat</p>
              <h6>Fast Pitch Softball</h6>
              <p>14 and under</p>
              <p>$20, includes shorts, team shirt & hat</p>
              <p>$10, for team shirt & hat only</p>
              <br />
              <p>
                <strong>Sign ups begin mid-April</strong>{" "}
              </p>
              <p>Grade determined by grade completed</p>
            </div>
            <div className="tile is-child box">
              <h3>T-Ball & Blast Ball</h3>
              <p>
                <strong>
                  T-Ball and Blast Ball sign ups take place in early March
                </strong>
              </p>
              <p>Co-Ed ages 5-6</p>
              <p>$10, includes team shirt & hat</p>
            </div>
          </div>
        </div>
      </div>
    </SpringSportsWrapper>
  );
};

const SpringSportsWrapper = styled.div`
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
  ul {
    width: 60%;
    margin: auto;
  }
`;

export default SpringSports;
