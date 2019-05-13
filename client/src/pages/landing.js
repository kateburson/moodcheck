import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="valign-wrapper" style={{ 
        height: "100vh", 
        background: "#FDFFC3",
        width: "100vw"
      }} >
      <div className="container">
      <div className="row">
        <div className="col s12 center-align" style={{padding: "25px"}}>
          <h3>
            Welcome to <b>MoodCheck</b>
          </h3 >
          <p className="flow-text grey-text text-darken-1">
          With MoodCheck you can easily enter mood data, keep a mood journal to identify trends and identify triggers, and set checkpoints to promote mindfulness. Start tracking your mood today! 
          </p>
          <br />
          <div className="row center-align">
          <Link 
            to="/register"
            style={{
              margin: "1rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable grey darken-4"
          >
            Register
          </Link>
          <Link
            to="/login"
            style={{
              margin: "1rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect white hoverable black-text"
          >
            Log In
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Landing;
