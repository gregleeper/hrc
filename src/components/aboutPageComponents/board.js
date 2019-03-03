import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const Board = () => {
  return (
    <BoardWrapper>
      <h3>Board Members</h3>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  h3 {
    color: ${styles.colors.mainRed};
    font-size: 1.5rem;
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

export default Board;
