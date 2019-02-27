import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import clock from "../images/clock.png";
import workers from "../images/workers.png";
import support from "../images/support.png";

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1 style={{ textAlign: "center", marginTop: "5px" }}>About Hugoton Rec</h1>
    <section className="section">
      <div className={`container`}>
        <img src={support} />
        <h3 style={{ textAlign: "center" }}>Our Mission:</h3>
        <p style={{ textAlign: "center" }}>
          Hugoton Recreation Commission, a tax supported organization, endeavors
          to contribute to the recreational needs of our community through
          development, coordination, funding and instruction of a variety of
          interest-based activities for residents of all ethnic background, age
          and ability.
        </p>
      </div>
    </section>
    <hr />
    <section className={`section `}>
      <div className="columns">
        <div className="column">
          <img src={clock} />
          <h3 style={{ textAlign: "center" }}>Office Hours:</h3>
          <div className="columns is-tablet is-centered">
            <div className={`column  is-one-fourth `}>
              <span>Main Office</span>
              <br />
              <span>211 S. Madison</span>
              <br />
              <span>Hugoton, KS 67951</span>
              <br />
              <span>620-544-4675</span>
            </div>
            <div className={`column`}>
              <span>Monday - Friday 8:00 a.m. - 5:00 p.m.</span>
              <br />
              <span>Closed all government holidays</span>
              <br />
              <span>See office for open gym schedule.</span>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <img src={workers} />
          <h3 style={{ textAlign: "center" }}>Staff:</h3>
          <div style={{ textAlign: "center" }}>
            <strong>
              <dt>Director:</dt>
            </strong>
            <span>Todd Gayer</span>
            <br />
            <br />
            <strong>
              <dt>Assistant Director:</dt>
            </strong>
            <span>Austin Heaton</span>
            <br />
            <br />
            <strong>
              <dt>Maintenance:</dt>
            </strong>
            <span>Glen Kiley</span>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div>
        <h3>Board Members</h3>
        <span>Jan Leonard, Tom Frederick</span>
      </div>
    </section>
    <section>
      <div className={`container `} />
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
