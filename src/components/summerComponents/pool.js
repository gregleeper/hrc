import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const PoolData = () => {
  return (
    <PoolDataWrapper>
      <div className="container">
        <h1>Hugoton Swimming Pool</h1>
        <p>
          Hugoton Swimming Pool is maintained by the city of Hugoton and staffed
          and managed by Hugoton Recreation Commission. The swimming pool is
          open the day after Memorial Day through mid-August.
        </p>
      </div>
    </PoolDataWrapper>
  );
};

const PoolDataWrapper = styled.div`
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

export default PoolData;
