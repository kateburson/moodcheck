import React from "react";
import API from "../utils/API";
import moment from "moment";
import { Modal } from "react-materialize";

import Nav from "../components/sideNav";
import JournalForm from "../components/journalForm";
import MoodSurvey from "../components/moodSurvey";
import MoodChart from "../components/moodChart";
import TodaysMood from "../components/todaysMood";
import EditJournalModal from "../components/editJournalModal";

// import API from "../utils/API";

class Dashboard extends React.Component {

  state = {
    journal: [],
    mood: [],
    moodID: "",
    journalID: ""
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");

    API.populateJournal(id)
    .then(res => {
      let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      console.log(result);
      this.setState({journal: result});
    })
  }

  removeJournal = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    API.removeJournal(id);
  }

  render() {
    return(
      <div style={{backgroundImage: "url(../../calflowersYellow.png)"}}>
        <Nav />
        <div className="container">

          <div className="row">
            <h3><b>Hey there, {localStorage.getItem("name").split(" ")[0]}</b></h3>
          </div>

          <div className="row">
            <div className="col s12 l4">
              <div style={{
                boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, .1)",
                padding: "25px",
                marginTop: "25px",
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

            <div className="col s12 l8" style={{padding: "25px", marginTop: "25px"}}>
              <h5><b>Today's Mood</b></h5>
              <div className="divider"></div>
              <TodaysMood />
            </div>

            <div 
              className="col s12 l8" 
              style={{
                padding: "25px",
                marginTop: "25px"
              }}>
              <h5><b>Today's Journal</b></h5>
              <div className="divider"></div>
              {this.state.journal.map((entry) => 
              <div>
              <p style={{marginTop: "25px"}}><b>{entry.title}</b></p>
              <p style={{marginBottom: "25px"}}>{entry.body}</p>
              <Modal 
                header="Edit Today's Journal" 
                trigger={<i className="material-icons" 
                style={{float: "right", margin: "25px 10px"}}
              >edit</i>}>
                <EditJournalModal id={entry._id} data={entry} />
              </Modal> 
              <i 
                className="material-icons right" 
                style={{margin: "25px 10px"}} 
                onClick={(e) => this.removeJournal(e, entry._id)}>
                  delete
              </i>
              <div className="divider" style={{clear: "right"}}></div>
              </div>)}
            </div>

          </div>   

          <div className="row">
            <div 
              className="col s12" 
              style={{
                boxShadow: "10px 10px 20px 5px #eee",
                padding: "25px",
                marginTop: "25px"
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