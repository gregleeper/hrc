import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./facilities.module.scss";
import mainOffice from "../images/main-office-front.jpg";
import bobSosa from "../images/bob-sosa-building.jpg";
import parsons from "../images/parsons-end.jpg";
import pool from "../images/pool-front.jpg";
import veterans from "../images/veterans-field.jpg";

const Facilities = ({ props }) => {
  return (
    <Layout>
      <SEO
        title="Facilities"
        keywords={[
          `hugoton`,
          `facilities`,
          `recreation`,
          `sports`,
          "activites",
          "leisure"
        ]}
      />
      <div />
      <div className="container">
        <h2>Facilities</h2>
        <div className={styles.mainOffice}>
          <figure className="image">
            <img src={mainOffice} alt="Hugoton Rec Main Office Gymnasium" />
          </figure>
          <h4>Main Office, Gynamsium, Game Room</h4>
          <span>211 S Madison</span>

          <span>Hugoton, KS 67951</span>

          <span>620-544-4675</span>
          <ul>
            <li>Two Tennis Courts, outdoor and lighted</li>
            <li>Basketball Courts, outdoor</li>
            <li>Community Skate Park</li>
            <li>Playground Structure</li>
            <li>Hartley Baseball Field, lighted</li>
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
        <div className={`columns is-multiline ${styles.others}`}>
          <div className="column is-half">
            <figure className="image">
              <img src={bobSosa} alt="Hugoton Rec Bob Sosa Memorial Building" />
            </figure>
            <h5>Bob Sosa Recreational Center</h5>
            <span>304 E 3rd St</span>
            <span>Home to Ceramic Shop and Wrestling</span>
          </div>
          <div className="column is-half">
            <figure className="image">
              <img src={bobSosa} alt="Hugoton Rec Legends Baseball Field" />
            </figure>
            <h5>Legends Field</h5>
            <span>11th and Adams</span>
            <span>
              Home of Hugoton High School Eagles, Sr Babe Ruth and Babe Ruth
            </span>
          </div>
          <div className="column is-half">
            <figure className="image">
              <img src={parsons} alt="Hugoton Rec Parsons Field" />
            </figure>
            <h5>Parsons Field</h5>
            <span>314 S Adams</span>
            <span>
              Home of Youth Soccer, Tackle Football and various summer
              activities
            </span>
          </div>
          <div className="column is-half">
            <figure className="image">
              <img src={veterans} alt="Hugoton Rec Veterans Field" />
            </figure>
            <h5>Veterans Field</h5>
            <span>5th and Washington</span>
            <span>Home of Pee Wee and Junior Softball, T-ball</span>
            <span>Two Lighted Fields, Restrooms, Concessions</span>
          </div>
          <div className="column is-half">
            <figure className="image">
              <img
                src={bobSosa}
                alt="Hugoton Rec Pat Concannon Memorial Field"
              />
            </figure>
            <h5>Pat Concannon Memorial Fields</h5>
            <span>300 West A St</span>
            <span>Home of Minor League and T-ball</span>
            <span>Two Fields, 358 meter walking Path surrounds fields</span>
          </div>
          <div className="column is-half">
            <figure className="image">
              <img src={pool} alt="Hugoton Rec Swimming Pool" />
            </figure>
            <h5>Hugoton Swimming Pool</h5>
            <span>Located in City Park</span>
            <span>620-544-2793</span>
            <ul>
              <li>6(six) 25 meter lanes</li>
              <li>2(two) 3 meter diving boards</li>
              <li>shallow end drop slide</li>
              <li>wading pool</li>
              <li>external 2 flume speed slide</li>
              <li>bathhouse and concessions</li>
            </ul>
            <span>Open Seasonally</span>
            <span>Available to rent for private parties</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Facilities;
