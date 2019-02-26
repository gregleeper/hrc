import React from "react";
import { Link } from "gatsby";
import logo from "../images/hrc-logo-blue.png";
import "./all.sass";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-light is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Hugoton Rec" style={{ width: "90px" }} />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about-us">
                About
              </Link>
              <Link className="navbar-item" to="/facilities">
                Facilities
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/sports">
                  Sports
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/sports/youth/summer">
                    Youth Summer Sports
                  </Link>
                  <Link className="navbar-item" to="/sports/youth/fall">
                    Youth Fall Sports
                  </Link>
                  <Link className="navbar-item" to="/sports/youth/winter">
                    Youth Winter Sports
                  </Link>
                  <Link className="navbar-item" to="/sports/youth/spring">
                    Youth Spring Sports
                  </Link>
                  <Link className="navbar-item" to="/sports/adult">
                    Adult Sports
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/leisure">
                  Leisure
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/leisure/cheer-dance">
                    Cheerleading/Dance
                  </Link>
                  <Link className="navbar-item" to="/leisure/tumbling">
                    Tumbling/Gymnastics
                  </Link>
                  <Link className="navbar-item" to="/leisure/arts-crafts">
                    Arts and Crafts
                  </Link>
                  <Link className="navbar-item" to="/leisure/safety-rodea">
                    Safety Rodeo
                  </Link>
                  <Link className="navbar-item" to="/leisure/adult">
                    Adult Activities
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/summer">
                  Summer
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/summer/pool">
                    Pool
                  </Link>
                  <Link className="navbar-item" to="/summer/swim-lessons">
                    Swimming Lessons
                  </Link>
                  <Link className="navbar-item" to="/summer/fun-run">
                    Gas Capital Fun Run
                  </Link>
                  <Link className="navbar-item" to="/summer/triathlon">
                    Triathlon
                  </Link>
                </div>
              </div>
            </div>
            <div className="navbar-end has-text-centered" />
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
