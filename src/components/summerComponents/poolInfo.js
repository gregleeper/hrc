import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";
import { transDefault } from "../../utils/styles";

const PoolInfo = () => {
  return (
    <PoolHoursWrapper>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-4">
            <div className="tile is-child box">
              <h3>Hours of Operation</h3>
              <h6>Open Swim:</h6>
              <p>Sunday - Saturday 2:00 to 6:00pm</p>
              <br />
              <h6>Adult Swim:</h6>
              <p>Monday - Saturday 1:00 to 2:00pm & 6:00 to 7:00pm</p>
              <br />
              <h6>Night Swims:</h6>
              <p>Dates to be announced</p>
              <p>Wednesday/Friday 7:30 to 9:30pm</p>
              <br />
              <h6>Private Parties</h6>
              <p>By reservation only</p>
              <p>Tuesday, Thursday, Saturday, Sunday</p>
              <p>7:30 to 9:30pm</p>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-4">
            <div className="tile is-child box">
              <h3>Rates</h3>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Rate</th>
                  </tr>
                  <tr>
                    <td>General Admission</td>
                    <td>$2.00</td>
                  </tr>
                  <tr>
                    <td>Adult Swim</td>
                    <td>$1.50</td>
                  </tr>
                  <tr>
                    <td>Night Swim</td>
                    <td>$1.50</td>
                  </tr>
                  <tr>
                    <td>Individual Season Pass</td>
                    <td>$35.00</td>
                  </tr>
                  <tr>
                    <td>Water Aerobics (8 classes)</td>
                    <td>$25.00</td>
                  </tr>
                  <tr>
                    <td>Swimming Lessons</td>
                    <td>$10.00</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="tile is-parent is-vertical is-4">
            <div className="tile is-child box">
              <h3>Rental Info for Private Parties</h3>
              <p>
                <i>$35 deposit required to reserve date</i>
              </p>
              <br />
              <p>1 - 35 people: $60 per hour</p>
              <p>36 - 50 people: $80 per hour</p>
              <p>Additional guests over 50 are $1.00 each</p>
              <br />
              <p>
                The guest count includes ALL persons within the pool enclosure
                whether they are swimming or not.
              </p>
              <br />
              <p>
                $35 due at the time of reservation, reamainder due at the time
                of party.
              </p>
              <br />
              <p>Reservations will be taken starting mid-May.</p>
            </div>
          </div>
        </div>
      </div>
    </PoolHoursWrapper>
  );
};

const PoolHoursWrapper = styled.div`
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

export default PoolInfo;
