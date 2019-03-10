import React, { Component } from "react";
import Header from "./NavbarHeader";
import Icons from "./NavbarIcons";
import Links from "./NavbarLinks";
import styled from "styled-components";

class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbarOpen = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen };
    });
  };
  render() {
    return (
      <NavWrapper>
        <Header handleNavbarOpen={this.handleNavbarOpen} />
        <Links navbarOpen={this.state.navbarOpen} />
        <Icons />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: lightgray;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export default Navbar;
