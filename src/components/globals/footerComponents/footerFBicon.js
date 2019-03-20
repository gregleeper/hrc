import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../../../utils";
import { FaFacebook } from "react-icons/fa";

class FooterIcon extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/profile.php?id=100007681517579"
      }
    ]
  };
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 5rem;
    cursor: pointer;
    ${styles.transObject({})}
  }
  .facebook-icon {
    color: #3b579d;
  }
  .icon:hover {
    color: ${styles.colors.mainBlue};
  }

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10rem;
`;

export default FooterIcon;
