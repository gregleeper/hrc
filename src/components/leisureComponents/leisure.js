import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const LeisureData = () => {
  return (
    <LeisureWrapper>
      <h1
        style={{
          fontSize: "1.75rem",
          color: `${styles.colors.mainBlue}`,
          textAlign: "center",
          marginTop: "1.5rem"
        }}
      >
        Leisure Activities
      </h1>
      <div className="tile is-ancesctor">
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Cheerleading/Dance Clinic</h3>
            <p>
              Girls Kindergarten through 2nd grade will learn a cheer or dance
              and perform at a high school basketball game.
            </p>
            <p>Cost: $10 includes pom poms</p>
          </div>
          <div className="tile is-child box">
            <h3>Tumbling and Gymnastics</h3>
            <p>Ages 4 and up</p>
            <p>Program offered September through April</p>
            <p>Call for more information</p>
          </div>
        </div>
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box">
            <h3>Arts and Crafts</h3>
            <p>
              Various arts and crafts programs are held for all ages throughout
              the year. Check with HRC office for class information, dates and
              times.
            </p>
            <p>Cost dependant on class.</p>
          </div>
          <div className="tile is-child box">
            <h3>Safety Rodeo</h3>
            <p>Early May. Time and location TBA.</p>
            <p>
              Get ready for a fun and SAFE summer! Kids will learn about bike
              safety, pool safety, and general first aid. They will get to
              participate in a bicycle obstacle course. Drawings for free bike
              helmets!
            </p>
            <p>
              More details to come. Check with HRC office for more information.
            </p>
          </div>
        </div>
      </div>
    </LeisureWrapper>
  );
};
const LeisureWrapper = styled.div`
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

export default LeisureData;
