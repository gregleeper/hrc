import React from "react";
import Layout from "../components/layout";
import { styles } from "../utils";
import SEO from "../components/seo";
import OurMission from "../components/aboutPageComponents/OurMission";
import OfficeHours from "../components/aboutPageComponents/officeHours";
import Staff from "../components/aboutPageComponents/staff";
import Board from "../components/aboutPageComponents/board";

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="container">
      <h1
        style={{
          fontSize: "1.75rem",
          color: `${styles.colors.mainBlue}`,
          textAlign: "center",
          marginTop: "1.5rem"
        }}
      >
        About Hugoton Rec
      </h1>
      <section className="section">
        <OurMission />
      </section>
      <hr />
      <section className="section">
        <OfficeHours />
      </section>
      <hr />
      <section className="section">
        <Staff />
      </section>
      <section className="section">
        <Board />
      </section>
    </div>
  </Layout>
);

export default AboutUs;
