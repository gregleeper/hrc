import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LeisureData from "../components/leisureComponents/leisure";

class LeisurePage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Leisure" />
        <div className="container">
          <LeisureData />
        </div>
      </Layout>
    );
  }
}

export default LeisurePage;
