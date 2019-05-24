import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Landing extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("current_user_token");

    if (token) {
      API.validateToken(token)
        .then(this.setState({redirectToDashboard: true}))
        .catch(() => localStorage.removeItem("current_user_token"));
    }
  }

  render() {
    return (
      <div className="valign-wrapper" style={{ 
        height: "100vh",
        top: "-350px",
        background: "rgba(253, 255, 195, .9)",
        width: "100vw",
        zIndex: 1
      }} >
      <div style={{position:"fixed", top: 0, width:"100%", height:"100%", zIndex:-100 }}>
        <video autoPlay muted loop src="../../calflowers.MOV" style={{width:"100%", height:"100%"}}></video>
      </div>
      <div className="container">
      <div className="row">
        <div className="col s12 center-align" style={{padding: "25px"}}>
          <h3>
            Welcome to <b>MoodCheck</b>
          </h3 >
          <p className="flow-text grey-text text-darken-4">
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
