import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const OfficeHours = () => {
  return (
    <OfficeHoursWrapper>
      <h3>Office Hours</h3>
      <div className="columns is-centered">
        <div className={`column  is-one-fourth `}>
          <p>Main Office</p>

          <p>211 S. Madison</p>

          <p>Hugoton, KS 67951</p>

          <div className="deskTel">
            <p>620-544-4675</p>
          </div>
          <div className="mobileTel">
            <a href="tel:6205444675">620-544-4675</a>
          </div>
        </div>
        <div className={`column`}>
          <p>Monday - Friday 8:00 a.m. - 5:00 p.m.</p>

          <p>Closed all government holidays</p>

          <p>See office for open gym schedule.</p>
        </div>
      </div>
    </OfficeHoursWrapper>
  );
};

const OfficeHoursWrapper = styled.div`
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
  }
  span {
    font-size: 0.75rem;
  }
`;

export default OfficeHours;
