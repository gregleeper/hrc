import React, { Component } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PoolData from "../../components/summerComponents/pool";
import PoolHours from "../../components/summerComponents/poolInfo";
import { Link } from "gatsby";
class SwimmingPool extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Pool"
          keywords={["swimming", "pool", "swimming pool", "swim"]}
        />
        <div
          className="tabs is-centered is-boxed"
          style={{ marginTop: "1rem" }}
        >
          <ul>
            <li>
              <Link to="/summer/">Summer Fun</Link>
            </li>
            <li className="is-active">
              <Link to="/summer/pool">Pool</Link>
            </li>
            <li>
              <Link to="/summer/swim-lessons">Swimming Lessons</Link>
            </li>
          </ul>
        </div>
        <PoolData />
        <PoolHours />
      </Layout>
    );
  }
}

export default SwimmingPool;
