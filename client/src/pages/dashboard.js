import React from "react";

import Nav from "../components/sideNav";
import Navbar from "../components/navbar";
import MoodSurvey from "../components/moodSurvey";
// import API from "../utils/API";

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <h3 className="hide-on-med-and-down">Dashboard</h3>
          <MoodSurvey />
        </div>
      </div>
    )
  }
}

export default Dashboard;