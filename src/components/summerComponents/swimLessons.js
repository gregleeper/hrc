import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const SwimLessonsData = () => {
  return (
    <SwimLessonsWrapper>
      <h1>Red Cross Swimming Lessons</h1>
      <p>
        <strong>Swimming lesson sessions</strong> (subject to change according
        to instructor availability)
      </p>
      <p>
        Sessions run Monday - Thursday each week for two weeks. Fridays will be
        used for make up days.
      </p>
      <p>Session 1: min-June througn late-June</p>
      <p>Session 2: early-July through mid-July</p>
      <br />
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child">
            <h3>Parent and Child Aquatics</h3>
            <p>
              Parents and children learn together to increase children's comfort
              in the water and build a foundation of basic aquatic and water
              safety skills. This level is conveniently scheduled in the evening
              to ensure maximum parent participation. Ages 6 months to about 3
              years.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Preschool Aquatics</h3>
            <p>
              Age appropriate level that teaches basic aquatic safety and
              survival skills to increase children comfort level in and around
              the water. Ages 4 and 5 years old.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 1: Introduction to Water Skills</h3>
            <p>
              Introductory level to various entrance and exit, floating, gliding
              and combined arm and leg action skills, open-eyed object retrieval
              and fun games to help your child become comfortable in the water.
              Approximately 6 years of age.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 2: Fundamental Aquatic Skills</h3>
            <p>
              Basic swimming skills and introduction to new skills, yet still a
              fun level to learn comfort in the water and experiment with floats
              and combined arm and leg action. Approximately 7-8 years.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 3: Stroke Development</h3>
            <p>
              Developmental level that begins to curve swimming habits into more
              aggressive, technique aquiring swimmers. New types of kicks, tread
              performance, and strokes are introduced in this level.
              Approximately 8-9 years.
            </p>
          </div>
        </div>
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child">
            <h3>Level 4: Stroke Improvement</h3>
            <p>
              Addition to stroke development. More specific skills and strokes
              are perfected and practiced. Dives from the side of the pool and
              feet first surface dives are also introduced in this level.
              Approximately 9-10 years.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 5: Stroke Refinement</h3>
            <p>
              Strenuous class that requires daily practice and critique in order
              to gain the most accurate stroke performance. Several dive
              techniques and turns are also introduced in this level.
              Approximately 10 year and up.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 6: Fitness</h3>
            <p>
              By this level, strudents should feel comfortable with all strokes
              turns, dives, and techniques. Lap swimming utilizing each stroke
              and performing specific techniques will allow students to swim
              with ease. Approximately 11 year and up.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 6: Personal Water Safety</h3>
            <p>
              Advanced level of diving and stroke performance, emphasis of
              points of rescue and safety. Approximately 11 years and up.
            </p>
          </div>
          <div className="tile is-child">
            <h3>Level 6: Fundamentals of Diving</h3>
            <p>
              Advanced diving course including correct body alignment and
              specific head first entries. Stroke performance is also important
              in this level. Approximately 11 years and up.
            </p>
          </div>
          <div className="tile is-child" />
        </div>
      </div>
      <div
        className="box"
        style={{ marginLeft: "10rem", marginRight: "10rem", display: "block" }}
      >
        <h3>Notes:</h3>
        <ul>
          <li>Attendance is required to pass</li>
          <li>
            Parents need to remain outside the pool fence at all times. This is
            to prevent distractions for participants and instructors
          </li>
          <li>
            Swimmers should bring their own nose and ear plugs, goggles, and
            towels
          </li>
          <li>
            Swimmers need to wear appropriate swimwear along with clothing and
            shoes to put on at the end of the session
          </li>
        </ul>
      </div>
    </SwimLessonsWrapper>
  );
};

const SwimLessonsWrapper = styled.div`
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
  ul li {
    list-style-type: disc;
    margin-left: 2rem;
    padding: 0.2rem;
  }
  margin-bottom: 3rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

export default SwimLessonsData;
