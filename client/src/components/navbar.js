import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0" style={{background: "#FDFFC3", height:"60px"}}>
          <div 
            className="nav-wrapper center-align"
          >
            <Link
              to="/dashboard"
              className="center"
            >
              <img 
                src="../../logo.png"
                style={{
                  height: "30px",
                  marginTop: "10px"
                }}
                alt="MoodCheck Logo"
              />

            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;