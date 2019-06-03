import React from "react";
import moment from "moment";

import API from "../utils/API";
import Nav from "../components/sideNav";
import JournalForm from "../components/journalForm";
import MoodSurvey from "../components/moodSurvey";
import MoodChart from "../components/moodChart";
import TodaysMood from "../components/todaysMood";
import TodaysJournal from "../components/todaysJournal";

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mood: [],
      journal: [],
    }
    this.updateMood = this.updateMood.bind(this);
    this.updateJournal = this.updateJournal.bind(this);
  }

  updateMood = mood => this.setState({mood: mood});
  updateJournal = journal => this.setState({journal: journal});

  componentDidMount = () => {
    const id = localStorage.getItem("id");

    API.findMoods(id)
    .then(res => {
      console.log(res.data.mood);
      let result = res.data.mood.filter(mood => moment(mood.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      this.setState({mood: result});
      console.log("this.state.mood", this.state.mood)
    });

    API.populateJournal(id)
    .then(res => {
      let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      console.log(result);
      this.setState({journal: result});
    });
  }

  render() {
    return(
      <div style={{backgroundImage: 'url("../../moddaisy.png")'}}>
        <Nav />
        <div className="container">

          <div className="row">
            <h3><b>Hey there, {localStorage.getItem("name").split(" ")[0]}</b></h3>
          </div>

          <div className="row">
            <div className="col s12 l4">

              {this.state.mood.length === 0 ? 
                <div style={{
                  background: "white",
                  boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                  padding: "25px"
                }}>
                  <h5><b>Mood Survey</b></h5>
                  <div className="divider"></div>
                  <MoodSurvey updateMood={this.updateMood} />
                </div>
                : null }
            
               <div
                style={{
                  background: "white",
                  boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                  padding: "25px",
                  marginTop: "25px",
                }}>
                  <h5><b>New Journal</b></h5>
                  <div className="divider"></div>
                  <JournalForm updateJournal={this.updateJournal} />
              </div> 
              
            </div>

            <div className="col s12 l8" style={{padding: "25px"}}>
              <h5><b>Today's Mood</b></h5>
              <div className="divider"></div>
              <TodaysMood updateMood={this.updateMood} data={this.state.mood}/>
            </div>
            <div 
              className="col s12 l8" 
              style={{padding: "25px"}}>
              <h5><b>Today's Journal</b></h5>
              <div className="divider"></div>
              <TodaysJournal updateJournal={this.updateJournal} data={this.state.journal} />
            </div>

          </div>   

          <div className="row">
            <div 
              className="col s12" 
              style={{
                background: "white",
                boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                padding: "25px",
                marginTop: "25px",
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