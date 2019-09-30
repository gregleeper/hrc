import React, { Component } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SummerFunData from "../../components/summerComponents/summerFun";
import { Link } from "gatsby";
class SummerFun extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Sports"
          keywords={[
            "swimming",
            "pool",
            "hugoton",
            "swim",
            "swimming pool",
            "swimming lessons",
            "lessons",
            "rec",
            "recreation"
          ]}
        />
        <div
          className="tabs is-centered is-boxed"
          style={{ marginTop: "1rem" }}
        >
          <ul>
            <li className="is-active">
              <Link to="/summer/">Summer Fun</Link>
            </li>
            <li>
              <Link to="/summer/pool">Pool</Link>
            </li>
            <li>
              <Link to="/summer/swim-lessons">Swimming Lessons</Link>
            </li>
          </ul>
        </div>
        <SummerFunData />
      </Layout>
    );
  }
}

export default SummerFun;
