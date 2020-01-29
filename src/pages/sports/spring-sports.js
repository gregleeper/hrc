import React, { Component } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SpringSportsData from "../../components/sportsComponents/springSports";

import { Link } from "gatsby";

class SportsPage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO
          title="Sports"
          keywords={[
            "spring sports",
            "youth sports",
            "TBall",
            "t-ball",
            "baseball",
            "softball",
            "hugoton rec",
            "hugoton"
          ]}
        />

        <div
          className="tabs is-centered is-boxed"
          style={{ marginTop: "1rem" }}
        >
          <ul>
            <li className="is-active">
              <Link to="/sports/spring-sports">Spring</Link>
            </li>
            <li>
              <Link to="/sports/summer-sports">Summer</Link>
            </li>
            <li>
              <Link to="/sports/fall-sports">Fall</Link>
            </li>
            <li>
              <Link to="/sports/winter-sports">Winter</Link>
            </li>
            <li>
              <Link to="/sports/adult-sports">Adult</Link>
            </li>
          </ul>
        </div>
        <SpringSportsData />
      </Layout>
    );
  }
}

export default SportsPage;
