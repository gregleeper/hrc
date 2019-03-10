import React, { Component } from "react";
import SummerSportsData from "../../components/sportsComponents/summerSports";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

class SummerSports extends Component {
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
              <li className="is-active">
                <a>Summer</a>
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
          <SummerSportsData />
        </div>
      </Layout>
    );
  }
}

export default SummerSports;