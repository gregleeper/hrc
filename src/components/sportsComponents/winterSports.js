import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const WinterSportsData = () => {
  return (
    <WinterSportsWrapper>
      <div className="container">
        <h1>Winter Youth Sports</h1>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-6">
            <div className="tile is-child box">
              <h3>Boys Basketball</h3>
              <p>Grades 3rd through 6th</p>
              <p>
                <strong>Sign ups begin late October</strong>
              </p>
              <p>Play in November & December</p>
              <p>Cost: $10 includes team shirt</p>
            </div>
            <div className="tile is-child box">
              <h3>Federation Wrestling Program</h3>
              <p>Youth wrestling program for ages 4 and up</p>
              <p>Runs December through March</p>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-6">
            <div className="tile is-child box">
              <h3>Girls Basketball</h3>
              <p>Grades 3rd through 6th</p>
              <p>
                <strong>Sign ups begin mid-December</strong>
              </p>
              <p>Play January & February</p>
              <p>Cost: $10 includes team shirt</p>
            </div>
            <div className="tile is-child box">
              <h3>Basketball clinics</h3>
              <p>Boys and Girls Grades 1st and 2nd</p>
              <p>Febrary TBA</p>
            </div>
            <div className="tile is-child box">
              <h3>Hot Shot Competition</h3>
              <p>Ages 9 to 16</p>
              <p>Mid-February</p>
            </div>
          </div>
        </div>
      </div>
    </WinterSportsWrapper>
  );
};

const WinterSportsWrapper = styled.div`
  h1 {
    font-size: 1.75rem;
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-top: 1.5rem;
  }
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
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

export default WinterSportsData;
