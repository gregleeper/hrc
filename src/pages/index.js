import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import bobSosa from "../images/bob-sosa-building.jpg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header, Banner, Styles, styles } from "../utils";
import CurrentActivities from "../components/homePageComponents/currentActivities";

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
    <SectionWrapper className="section">
      <h2 style={{ textAlign: "center", color: styles.colors.mainBlue }}>
        Current Activities
      </h2>
      <CurrentActivities />
    </SectionWrapper>
    <hr />
    <SectionWrapper>
      <div>
        <h2>Announcements</h2>
      </div>
    </SectionWrapper>
  </Layout>
);

const SectionWrapper = styled.section`
  h2 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.75rem;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default IndexPage;
