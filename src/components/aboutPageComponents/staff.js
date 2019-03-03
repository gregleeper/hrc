import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const Staff = () => {
  return (
    <StaffWrapper>
      <h3>Staff</h3>
      <p>
        <strong>Director:</strong> Todd Gayer
      </p>
      <br />
      <p>
        <strong>Assistant Director:</strong> Austin Heaton
      </p>
      <br />
      <p>
        <strong>Maintenance:</strong> Glen Kiley
      </p>
      <br />
    </StaffWrapper>
  );
};

const StaffWrapper = styled.div`
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
  dt {
    font-weight: bold;
  }
`;

export default Staff;
