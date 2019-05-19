import React from "react";

import SideNav from "../components/sideNav";
import Navbar from "../components/navbar";
import MoodSurvey from "../components/moodSurvey";
// import API from "../utils/API";

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <SideNav />
        <Navbar />
        <div className="container">
          <h3>Dashboard</h3>
            <MoodSurvey />
        </div>
      </div>
    )
  }
}

export default Dashboard;