import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
class SportsPage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO title="Sports" />
        <div>Sports</div>
      </Layout>
    );
  }
}

export default SportsPage;
