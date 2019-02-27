import React from "react";
import { Link } from "gatsby";
import bobSosa from "../images/bob-sosa-building.jpg";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${bobSosa})`,
        backgroundPosition: "center"
      }}
    >
      <h3
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #ff0c0c, -0.5rem 0 0 #ff0c0c",
          backgroundColor: "#ff0c0c",
          color: "white",
          padding: "1rem",
          opacity: "0.7"
        }}
      >
        Hugoton Rec
      </h3>
    </div>
    <SEO
      title="Home"
      keywords={[`hugoton`, `recreation`, `sports`, "activites", "leisure"]}
    />
    <section className="section">
      <h3 style={{ textAlign: "center" }}>Current Activities</h3>
      <div className={`columns `}>
        <div className="column">
          schedule 1
          <ul>
            <li>date 1</li>
            <li>date 2</li>
            <li>date 3</li>
            <li>date 4</li>
          </ul>
        </div>

        <div className="column">
          schedule 2
          <ul>
            <li>date 1</li>
            <li>date 2</li>
            <li>date 3</li>
            <li>date 4</li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
    <section className="section">
      <div>
        <h3 style={{ textAlign: "center" }}>Announcements</h3>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
