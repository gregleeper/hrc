import styled from "styled-components";
import { styles } from "../../utils";

const FacilitiesWrapper = styled.div`
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
  margin-bottom: 3rem;
  ul {
    width: 60%;
    margin: auto;
  }

  .deskTel {
    display: none;
    @media (min-width: 768px) {
      display: inherit;
    }
  }

  .mobileTel {
    text-align: center;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export default FacilitiesWrapper;
