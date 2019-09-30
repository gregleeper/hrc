import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledBackgroundSection, styles } from "../utils";
import CurrentActivities from "../components/homePageComponents/currentActivities";
import Announcements from "../components/homePageComponents/announcements";

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection />

    <SEO
      title="Home"
      keywords={[
        `hugoton`,
        `recreation`,
        `sports`,
        "activites",
        "leisure",
        "swimming",
        "rec",
        "summer",
        "stevens county",
        "stevens"
      ]}
    />
    <div className="container">
      <SectionWrapper>
        <div>
          <h1>Announcements</h1>

          <Announcements />
        </div>
      </SectionWrapper>
      <hr />
      <SectionWrapper>
        <div>
          <h1>Current Activities</h1>
          <CurrentActivities />
        </div>
      </SectionWrapper>
    </div>
  </Layout>
);

const SectionWrapper = styled.section`
  h1 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.75rem;
    font-size: 1.7rem;
  }

  padding: 3rem;
`;

export default IndexPage;
