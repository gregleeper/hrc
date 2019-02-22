import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`hugoton`, `recreation`, `sports`, "activites", "leisure"]}
    />
    <h1>Hugoton Recreation Commission</h1>
    <p>This is where a photo gallery will go.</p>

    <h5 style={{ textAlign: "center" }}>Our Mission:</h5>
    <p style={{ textAlign: "center" }}>
      Hugoton Recreation Commission, a tax supported organization, endeavors to
      contribute to the recreational needs of our community through development,
      coordination, funding and instruction of a variety of interest-based
      activities for residents of all ethnic backgrounds, age and ability.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
