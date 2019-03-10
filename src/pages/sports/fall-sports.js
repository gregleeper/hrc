import React, { Component } from "react";
import FallSportsData from "../../components/sportsComponents/fallSports";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

class FallSports extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Sports" />
        <div className="container">
          <div className="tabs is-centered is-boxed">
            <ul>
              <li>
                <Link to="/sports/spring-sports">Spring</Link>
              </li>
              <li>
                <Link to="/sports/summer-sports">Summer</Link>
              </li>
              <li className="is-active">
                <a>Fall</a>
              </li>
              <li>
                <Link to="/sports/winter-sports">Winter</Link>
              </li>
              <li>
                <Link to="/sports/adult-sports">Adult</Link>
              </li>
            </ul>
          </div>
          <FallSportsData />
        </div>
      </Layout>
    );
  }
}

export default FallSports;
