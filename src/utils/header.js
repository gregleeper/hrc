import React from "react";
import styled from "styled-components";

const Header = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>;
};

const IndexHeader = styled.header`
  min-height: calc(45vh - 52px);
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
