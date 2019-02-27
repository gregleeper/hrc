import React, { Component } from "react";
import { Link } from "gatsby";
//import logo from "../../../images/hrc-logo-400x100.png";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utils";

class NavbarHeader extends Component {
  render() {
    const { handleNavbarOpen } = this.props;
    return (
      <HeaderWrapper>
        <Brand to="/">HRC</Brand>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbarOpen();
          }}
        />
      </HeaderWrapper>
    );
  }
}
//console.log(`${styles.colors.mainBlue.toString()}`);

const HeaderWrapper = styled.div`
  padding: 0.4rem, 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainBlue};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
const Brand = styled(Link)`
  font-family: "Tahoma", sans-serif;
  font-size: 1.875em;
  font-weight: bold;

  margin-right: 0.5em;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: ${styles.colors.mainBlue};
`;
export default NavbarHeader;
