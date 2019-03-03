import React from "react";
import FacilitiesWrapper from "./facilitiesWrapper";
import PoolImage from "./poolImage";

const Pool = () => {
  return (
    <FacilitiesWrapper>
      <PoolImage />
      <h3>Hugoton Swimming Pool</h3>
      <p>Located in City Park</p>
      <div className="deskTel" style={{ marginBottom: "1rem" }}>
        <p>620-544-2793</p>
      </div>
      <div className="mobileTel" style={{ marginBottom: "1rem" }}>
        <a href="tel:6205442793">620-544-2793</a>
      </div>
      <div className="content">
        <ul>
          <li>6(six) 25 meter lanes</li>
          <li>2(two) 3 meter diving boards</li>
          <li>shallow end drop slide</li>
          <li>wading pool</li>
          <li>external 2 flume speed slide</li>
          <li>bathhouse and concessions</li>
        </ul>
        <p>
          <i>Open Seasonally</i>
        </p>
        <p>Available to rent for private parties</p>
      </div>
    </FacilitiesWrapper>
  );
};

export default Pool;
