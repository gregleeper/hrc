import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const AdultSportsData = () => {
  return (
    <AdultSportsWrapper>
      <h3>Adult Sports & Fitness</h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Women's Volleyball</h3>
            <p>
              <strong>Team sign ups mid-August</strong>
            </p>
            <p>Cost Per Team: $200</p>
          </div>
          <div className="tile is-child box">
            <h3>Co-Ed Volleyball</h3>
            <p>
              <strong>Sign ups mid-March</strong>
            </p>
            <p>Cost: Competitive League $75</p>
            <p>Cost: Church League $50</p>
          </div>
          <div className="tile is-child box">
            <h3>Men's Basketball League</h3>
            <p>
              <strong>Sign ups early December</strong>
            </p>
            <p>Cost: $150 per team</p>
          </div>
          <div className="tile is-child box">
            <h3>Co-Ed Softball League</h3>
            <p>
              <strong>Sign ups mid-June</strong>
            </p>
            <p>Cost: $100 per team</p>
          </div>
          <div className="tile is-child box">
            <h3>Men's Softball League</h3>
            <p>
              <strong>Sign ups mid-May</strong>
            </p>
            <p>Cost: $100 per team</p>
          </div>
        </div>
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Walking/Running</h3>
            <p>
              When the weather is nasty, come walk or run inside. Track
              available during Open Gym. 17 laps equals 1 mile. Lap counters
              available. It is free to walk/run.
            </p>
          </div>
          <div className="tile is-child box">
            <h3>Noon Hoops</h3>
            <p>
              Mens's pickup basketball. Tuesdays and Fridays over the lunch
              hour. Showers available. It is free to play.
            </p>
          </div>
          <div className="tile is-child box">
            <h3>Yoga</h3>
            <p>
              <strong>Beginners/Intermediate:</strong> For all levels of
              fitness. Class is formatted with modifications to simplify poses
              for the beginner and challenge the more experienced.
            </p>
            <br />
            <p>
              <strong>Yoga for life:</strong> Modified "Chair" Yoga. Perfect for
              seniors, overweight individuals and those recovering from joint
              replacement surgery.
            </p>
            <br />
            <p> Cost: $25 for 8 classes</p>
            <p>Check office for class days and times.</p>
          </div>
        </div>
      </div>
    </AdultSportsWrapper>
  );
};

const AdultSportsWrapper = styled.div`
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

export default AdultSportsData;
