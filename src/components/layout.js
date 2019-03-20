import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
//import "./all.sass";
import "./layout.scss";
import Navbar from "../components/globals/Navbar/Navbar";
import FooterFBicon from "./globals/footerComponents/footerFBicon";

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
          <footer className="footer">
            <div className="content has-text-centered">
              <div className="columns">
                <div className="column">
                  <h6>Menu</h6>
                  <Link to="/">Home</Link>
                  <br />
                  <Link to="/about-us">About</Link>
                  <br />
                  <Link to="/facilities">Facilities</Link>
                  <br />
                  <Link to="/sports/spring-sports">Sports</Link>
                  <br />
                  <Link to="/leisure">Leisure</Link>
                  <br />
                  <Link to="/summer">Summer</Link>
                </div>
                <div className="column">
                  <h6>Follow us on Facebook</h6>
                  <FooterFBicon style={{ display: "block" }} />
                </div>
                <div className="column ">
                  <h6>Contact</h6>
                  <p>211 S Madison</p>
                  <p className="deskTel">620-544-4675</p>
                  <a className="mobileTel" href="tel:6205444675">
                    620-544-4675
                  </a>
                  <p>hugrec@pld.com</p>
                </div>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <span>
                  © {new Date().getFullYear()} Hugoton Recreation Commission
                </span>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
