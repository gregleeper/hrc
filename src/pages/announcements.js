import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../utils";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery, Link } from "gatsby";
import moment from "moment";

class Announcements extends Component {
  render() {
    const { announcements } = this.props.data;

    return (
      <Layout>
        <SEO
          title="Announcements"
          keywords={["announcments", "hugoton rec", "activities", "current"]}
        />
        <AnnouncementsWrapper className="container">
          <h2>Announcements</h2>
          <p style={{ marginBottom: "1rem" }}>
            <Link to="/">Back to home page</Link>
          </p>
          <div className="columns is-multiline">
            {announcements ? (
              announcements.edges.map(item => (
                <div
                  className="is-parent column is-12"
                  key={item.node.childMarkdownRemark.id}
                >
                  <div className="card">
                    <h3 className="card-header-title center">
                      {item.node.childMarkdownRemark.frontmatter.title}
                    </h3>
                    <div
                      className="card-content"
                      dangerouslySetInnerHTML={{
                        __html: item.node.childMarkdownRemark.html
                      }}
                    />
                    <footer className="card-footer">
                      <span className="card-footer-item">
                        Date Modified:{" "}
                        {moment(
                          item.node.childMarkdownRemark.frontmatter.date
                        ).format("MMMM DD, YYYY")}
                      </span>
                    </footer>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h3>There are no announcements at the moment!</h3>
              </div>
            )}
          </div>
        </AnnouncementsWrapper>
      </Layout>
    );
  }
}

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          announcements: allFile(
            filter: { absolutePath: { regex: "/announcements/" } }
            sort: { fields: [mtimeMs], order: DESC }
          ) {
            totalCount
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    date
                  }
                  html
                }
              }
            }
          }
        }
      `}
      render={data => <Announcements data={data} />}
    />
  );
};

const AnnouncementsWrapper = styled.div`
  h2 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.75rem;
    font-size: 1.7rem;
  }
  h3 {
    color: ${styles.colors.mainRed};
    text-align: center;
    margin-bottom: 0.5rem;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  p {
    text-align: center;
  }
  span {
    font-size: 0.75rem;
  }

  padding: 3rem;
`;

//export default Announcements;
