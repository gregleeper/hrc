import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SpringSports from "../components/sportsComponents/springSports";
import SummerSports from "../components/sportsComponents/summerSports";

class SportsPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Sports" />
        <div className="container">
          <div className="tile is-ancestor" style={{ marginTop: "3rem" }}>
            <SpringSports />
            <SummerSports />
          </div>
        </div>
      </Layout>
    );
  }
}

export default SportsPage;
