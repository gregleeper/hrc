import React, { Component } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SwimLessonsData from "../../components/summerComponents/swimLessons";
import { Link } from "gatsby";

class SwimLessons extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO
          title="Swimming Lessons"
          keywords={[
            "swimming",
            "pool",
            "swimming pool",
            "swim",
            "swim lessongs",
            "swimming lessons",
            "red cross swimming lessons",
            "red cross"
          ]}
        />
        <div
          className="tabs is-centered is-boxed"
          style={{ marginTop: "1rem" }}
        >
          <ul>
            <li>
              <Link to="/summer/">Summer Fun</Link>
            </li>
            <li>
              <Link to="/summer/pool">Pool</Link>
            </li>
            <li className="is-active">
              <Link to="/summer/swim-lessons">Swimming Lessons</Link>
            </li>
          </ul>
        </div>
        <SwimLessonsData />
      </Layout>
    );
  }
}

export default SwimLessons;
