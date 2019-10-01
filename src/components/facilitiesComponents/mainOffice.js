import React from "react";
import MainOfficeImage from "./mainOfficeImage";
import FacilitiesWrapper from "./facilitiesWrapper";

const MainOffice = () => {
  return (
    <FacilitiesWrapper>
      <div>
        <MainOfficeImage />
        <h3>Main Office, Gynamsium, Game Room</h3>
        <p>211 S Madison</p>

        <p>Hugoton, KS 67951</p>
        <div className="deskTel">
          <p>620-544-4675</p>
        </div>
        <div className="mobileTel">
          <a href="tel:620-544-4675">620-544-4675</a>
        </div>

        <br />
        <h3>Features</h3>
        <div className="content columns">
          <div className="column is-6">
            <ul>
              <li>Two Tennis Courts, outdoor and lighted</li>
              <li>Basketball Courts, outdoor</li>
              <li>Community Skate Park</li>
              <li>Playground Structure</li>
              <li>Hartley Baseball Field, lighted</li>
            </ul>
          </div>
          <div className="column is-6">
            <ul>
              <li>Game Room with:</li>
              <ul>
                <li>Ping Pong</li>
                <li>Air Hockey</li>
                <li>Video Games</li>
                <li>Kitchen</li>
                <li>Available to rent, please call Main Office</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </FacilitiesWrapper>
  );
};

export default MainOffice;
