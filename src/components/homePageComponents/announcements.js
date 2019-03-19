import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { styles } from "../../utils";
import moment from "moment";

class Announcements extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <AnnouncementsWrapper>
        <div className="columns is-multiline">
          {data.announcements ? (
            data.announcements.edges.map(item => (
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
          {data.announcements.totalCount > 3 ? (
            <Link to="/announcements">See all Announcements</Link>
          ) : (
            <div />
          )}
        </div>
      </AnnouncementsWrapper>
    );
  }
}

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          announcements: allFile(
            limit: 3

            filter: { absolutePath: { regex: "/announcements/" } }
            sort: { fields: [birthtimeMs], order: DESC }
          ) {
            totalCount
            edges {
              node {
                childMarkdownRemark {
                  id
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
`;
