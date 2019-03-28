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
              <div className="is-parent column is-12" key={item.node.id}>
                <div className="card">
                  <h3 className="card-header-title center">
                    {item.node.frontmatter.title}
                  </h3>
                  <div
                    className="card-content"
                    dangerouslySetInnerHTML={{
                      __html: item.node.html
                    }}
                  />
                  <footer className="card-footer">
                    <span className="card-footer-item">
                      Date Modified:{" "}
                      {moment(item.node.frontmatter.date).format(
                        "MMMM DD, YYYY"
                      )}
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
            <Link to="/announcements" style={{ textAlign: "center" }}>
              See all Announcements
            </Link>
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
          announcements: allMarkdownRemark(
            limit: 3
            filter: { fileAbsolutePath: { regex: "/announcements/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            totalCount
            edges {
              node {
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
      `}
      render={data => <Announcements data={data} />}
    />
  );
};

const AnnouncementsWrapper = styled.div`
  h2 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.1rem;
    font-size: 1.2rem;
  }
  h3 {
    color: ${styles.colors.mainRed};
    text-align: center;
    margin-bottom: 0.5rem;
  }
  margin-left: 1rem;
  margin-right: 1rem;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  p {
    text-align: left;
    line-height: 1.7rem;
  }
  ul li {
    list-style-type: circle;
    margin-left: 4rem;
    margin-right: 4rem;
  }
  span {
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
