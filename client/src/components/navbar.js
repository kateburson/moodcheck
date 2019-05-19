import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./sideNav";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        
        <nav 
          className="z-depth-0" 
          style={{
            background: "#FDFFC3", 
            height: "60px", 
            boxShadow: "5px 5px 20px 5px #eee",
          }}>
          <div className="nav-wrapper center-align container">
            <Link
              to="/dashboard"
              className="center"
            >
              <img 
                src="../../logo.png"
                className="right"
                style={{
                  height: "25px",
                  marginTop: "15px"
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