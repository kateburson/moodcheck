import React from "react";
import API from "../utils/API";
import moment from "moment";

import Nav from "../components/sideNav";
import JournalForm from "../components/journalForm";
import MoodSurvey from "../components/moodSurvey";
import MoodChart from "../components/moodChart";
import { Collapsible } from "react-materialize";
import { Modal } from "react-materialize";
import CollapsibleItem from "react-materialize/lib/CollapsibleItem";
// import API from "../utils/API";

class Dashboard extends React.Component {

  state = {
    journal: []
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

  componentDidUpdate = () => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => {
      let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      console.log(result);
      this.setState({journal: result});
    })
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col s12 l4" 
              style={{
                boxShadow: "2px 2px 5px 2.5px #ddd",
                padding: "25px",
                marginTop: "25px",
              }}>
              <h5><b>Mood Survey</b></h5>
              <div className="divider"></div>
              <MoodSurvey/>
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
              <p><b>{entry.date.split("T")[0] + " " + entry.title}</b></p>
              <p>{entry.body}</p>
              <div className="divider"></div>
              </div>)}

              <Modal header="Journal Entry" trigger={<button
                style={{
                  borderRadius: "3px",
                  background: "#FDFFC3",
                  color: "black",
                  marginTop: "2rem"
                }}
                className="btn waves-effect waves-light"
                type="button"
              >
              <i class="material-icons">add</i>Journal
              </button>}>
                <JournalForm/>
              </Modal>
            </div>
          </div>
          <div className="row">
            <div 
              className="col s12" 
              style={{
                boxShadow: "2px 2px 5px 2.5px #ddd",
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