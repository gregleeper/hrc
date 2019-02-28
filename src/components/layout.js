import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
//import "./all.sass";
import "./layout.scss";
import Navbar from "../components/globals/Navbar/Navbar";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar />

        <div>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
