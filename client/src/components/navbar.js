import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0" style={{background: "#FDFFC3"}}>
          <div 
            className="nav-wrapper"
          >
            <Link
              to="/"
              className="col s5 center black-text"
            >
              <h5 style={{
                fontWeight: "bold"
              }}>MoodCheck</h5>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;