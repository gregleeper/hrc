import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { styles } from "../../../utils";

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "Home"
      },
      {
        id: 1,
        path: "/about-us",
        name: "About"
      },
      {
        id: 2,
        path: "/facilities",
        name: "Facilities"
      },
      {
        id: 3,
        path: "/sports/spring-sports",
        name: "Sports"
      },
      {
        id: 4,
        path: "/leisure",
        name: "Leisure"
      },
      {
        id: 5,
        path: "/summer",
        name: "Summer"
      }
    ]
  };
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGray};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGray};
      color: ${styles.colors.mainBlue};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "240px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "0.5s", type: "linear" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;

    li {
      margin-left: 0;
    }
    .nav-link:hover {
      background: #fff;
      padding: 0.5rem 1rem;
    }
  }
`;

export default NavbarLinks;
