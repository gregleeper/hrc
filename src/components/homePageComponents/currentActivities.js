import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { styles } from "../../utils";

const CurrentActivities = ({ data }) => (
  <CurrentActivitiesWrapper>
    {data.schedules ? (
      data.schedules.edges.map(item => (
        <Column span={12 / data.schedules.totalCount} key={item.node.id}>
          <h3>{item.node.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
        </Column>
      ))
    ) : (
      <Column span="1">
        <h3>There are no currently scheduled activities at the moment!</h3>
      </Column>
    )}
  </CurrentActivitiesWrapper>
);

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          schedules: allMarkdownRemark {
            totalCount
            edges {
              node {
                frontmatter {
                  title
                }
                html
                id
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
  h3 {
    color: ${styles.colors.mainRed};
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  text-align: center;
`;

const Column = styled.div`
  float: left;
  width: 100%;
  @media (min-width: 768px) {
    width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  }
`;
