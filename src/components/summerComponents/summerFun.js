import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const SummerFun = () => {
  return (
    <SummerFunWrapper>
      <div className="container">
        <h1>Summer Fun Activities</h1>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-6">
            <div className="tile is-child box">
              <h3>Gas Capital Fun Run</h3>
              <p>June, Date TBA</p>
              <br />
              <p>5K run, 1 mile walk, Kids fun run</p>
              <br />
              <p>
                Cost is $5, includes T-shirt. Pre-registration recommended to
                guarantee t-shirt size.
              </p>
            </div>
            <div className="tile is-child box ">
              <h3>Triathlon</h3>
              <p>July, Date TBA</p>
              <br />
              <p>
                Show off your athletic talent by participating in Hugoton's
                triathlon. Compete in Men's, Women's, or Co-Ed relay divisions.
              </p>
              <br />
              <p>400 meter swim, 12.5 mile bike, 5k run</p>
              <br />
              <p>Kids Gotta Tri-miniature version of Hugoton's triathlon.</p>
              <br />
              <p>
                Cost: $25, includes T-shirt. Pre-registration recommended to
                guarantee t-shirt size. Registration dates to be announced.
              </p>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-6">
            <div className="tile is-child box">
              <h3>Backyard Barbecue Contest</h3>
              <p>
                A fun and friendly cook-off competition will give local backyard
                cooks a chance to showcase their talents and possibly win some
                cash.
              </p>
              <br />
              <p>
                Each team will be provided with meat. Teams prepare 2 sides and
                meat. All preparations must be made on site. For more
                information, registration dagtes and contest rules, contact
                Stevens County Extension office or Fair Board Office.
              </p>
              <br />
              <p>Late July during fair week.</p>
              <p>Cost: $20 per team</p>
            </div>
          </div>
        </div>
      </div>
    </SummerFunWrapper>
  );
};

const SummerFunWrapper = styled.div`
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

export default SummerFun;
