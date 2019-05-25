import React from "react";
import API from "../utils/API";
import moment from "moment";
import { Modal } from "react-materialize";

import Nav from "../components/sideNav";
import JournalForm from "../components/journalForm";
import MoodSurvey from "../components/moodSurvey";
import MoodChart from "../components/moodChart";
import TodaysMood from "../components/todaysMood";
import TodaysJournal from "../components/todaysJournal";

// import API from "../utils/API";

class Dashboard extends React.Component {
  render() {
    return(
      <div style={{backgroundImage: "url(../../full-bloom.png)"}}>
        <Nav />
        <div className="container">

          <div className="row">
            <h3><b>Hey there, {localStorage.getItem("name").split(" ")[0]}</b></h3>
          </div>

          <div className="row">
            <div className="col s12 l4">
              <div style={{
                boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                padding: "25px"
              }}>
              <h5><b>Mood Survey</b></h5>
              <div className="divider"></div>
              <MoodSurvey/>
            </div>

            <div
              style={{
                boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                padding: "25px",
                marginTop: "25px",
              }}>
              <h5><b>New Journal</b></h5>
              <div className="divider"></div>
              <JournalForm/>
            </div>
          </div>

            <div className="col s12 l8" style={{padding: "25px"}}>
              <h5><b>Today's Mood</b></h5>
              <div className="divider"></div>
              <TodaysMood />
            </div>

            <div 
              className="col s12 l8" 
              style={{padding: "25px"}}>
              <h5><b>Today's Journal</b></h5>
              <div className="divider"></div>
              <TodaysJournal />
            </div>

          </div>   

          <div className="row">
            <div 
              className="col s12" 
              style={{
                boxShadow: "10px 10px 20px 5px #eee",
                padding: "25px",
              }}>
              <h5><b>Mood Chart</b></h5>
              <MoodChart />
            </div> 
          </div>

        </div>
      </div>

    )
  }
}

export default Dashboard;