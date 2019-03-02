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
    <div className="container">
      <SectionWrapper>
        <div>
          <h2>Current Activities</h2>
          <CurrentActivities />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div>
          <h2>Announcements</h2>
        </div>
      </SectionWrapper>
    </div>
  </Layout>
);

const SectionWrapper = styled.section`
  h2 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }

  padding: 3rem;
`;

export default IndexPage;
