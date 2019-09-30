import React, { Component } from "react";
import WinterSportsData from "../../components/sportsComponents/winterSports";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

class FallSports extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Winter Sports" />

        <div
          className="tabs is-centered is-boxed"
          style={{ marginTop: "1rem" }}
        >
          <ul>
            <li>
              <Link to="/sports/spring-sports">Spring</Link>
            </li>
            <li>
              <Link to="/sports/summer-sports">Summer</Link>
            </li>
            <li>
              <Link to="/sports/fall-sports">Fall</Link>
            </li>
            <li className="is-active">
              <Link to="/sports/winter-sports">Winter</Link>
            </li>
            <li>
              <Link to="/sports/adult-sports">Adult</Link>
            </li>
          </ul>
        </div>
        <WinterSportsData />
      </Layout>
    );
  }
}

export default FallSports;
