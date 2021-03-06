import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { styles } from "../../utils";
import moment from "moment";

const CurrentActivities = ({ data }) => (
  <CurrentActivitiesWrapper>
    <div className="columns is-multiline">
      {data.schedules ? (
        data.schedules.edges.map(item => (
          <div
            className={`is-parent column is-${
              12 / data.schedules.totalCount >= 4
                ? 12 / data.schedules.totalCount
                : 4
            }`}
            key={item.node.id}
          >
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
                  {moment(item.node.frontmatter.date).format("MMMM DD, YYYY")}
                </span>
              </footer>
            </div>
          </div>
        ))
      ) : (
        <div className="is-parent column is-12">
          <p>There are no currently scheduled activities at the moment!</p>
        </div>
      )}
    </div>
  </CurrentActivitiesWrapper>
);

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          schedules: allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "/schedules/" }
              frontmatter: { title: { ne: "Placeholder" } }
            }
            sort: { fields: [frontmatter___title], order: ASC }
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
      render={data => <CurrentActivities data={data} />}
    />
  );
};
const CurrentActivitiesWrapper = styled.div`
  h2 {
    color: ${styles.colors.mainBlue};
    text-align: center;
    margin-bottom: 0.1rem;
    margin-top: 0.7rem;
    font-size: 1.2rem;
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
`;
