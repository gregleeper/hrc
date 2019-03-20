import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledBackgroundSection, styles } from "../utils";
import CurrentActivities from "../components/homePageComponents/currentActivities";
import Announcements from "../components/homePageComponents/announcements";
//import BobSosaImage from "../components/facilitiesComponents/bobSosaImage";

const IndexPage = () => (
  <Layout>
    <section>
      <StyledBackgroundSection />
    </section>

    <SEO
      title="Home"
      keywords={[`hugoton`, `recreation`, `sports`, "activites", "leisure"]}
    />
    <div className="container">
      <SectionWrapper>
        <div>
          <h2>Announcements</h2>

          <Announcements />
        </div>
      </SectionWrapper>
      <hr />
      <SectionWrapper>
        <div>
          <h2>Current Activities</h2>
          <CurrentActivities />
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
    font-size: 1.7rem;
  }

  padding: 3rem;
`;

export default IndexPage;
