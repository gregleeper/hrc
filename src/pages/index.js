import React from "react";
import { Link } from "gatsby";
import bobSosa from "../images/bob-sosa-building.jpg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, Banner } from "../utils";

const IndexPage = () => (
  <Layout>
    <Header img={bobSosa}>
      <Banner
        title="Hugoton Recreation Commission"
        subtitle="Proudly supporting the community of Hugoton"
      />
    </Header>
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
