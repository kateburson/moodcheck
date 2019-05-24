import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 center-align" style={{padding: "25px"}}>
          <h3>
            Welcome to<img style={{width: "220px", marginLeft: "12.5px"}} src="../../logo.png" alt="MoodCheckLogo" />
          </h3 >
          <p className="flow-text grey-text text-darken-4">
          With MoodCheck you can easily enter mood data, keep a mood journal to identify trends and triggers, and set checkpoints to promote mindfulness. Start tracking your mood today! 
          </p>
          <br />
          <div className="row center-align">
          <button
            style={{
              margin: "1rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable grey darken-4"
            onClick={() => this.props.view(false, false, true, false)}
          >
            Register
          </button>
          <button
            style={{
              margin: "1rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable black-text white"
            onClick={() => this.props.view(false, true, false, false)}
          >
            Log In
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
