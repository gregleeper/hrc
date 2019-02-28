import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";

class CurrentActivities extends Component {
  render() {
    return <div>current activities</div>;
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query SchedulesQuery {
        frontmatter {
          title
          date
          body
        }
      }
    `}
    render={(data, count) => <CurrentActivities data={data} count={count} />}
  />
);
