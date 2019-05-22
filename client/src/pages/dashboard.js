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
    journal: [],
    mood: []
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");

    API.findMoods(id)
    .then(res => {
      let result = res.data.mood.filter(mood => moment(mood.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      console.log(result);
      this.setState({mood: result});
    })

    API.populateJournal(id)
    .then(res => {
      let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      console.log(result);
      this.setState({journal: result});
    })
  }

  // componentDidUpdate = () => {
  //   const id = localStorage.getItem("id");
  //   API.populateJournal(id)
  //   .then(res => {
  //     let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
  //     console.log(result);
  //     this.setState({journal: result});
  //   })
  // }

  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col s12 l4" 
              style={{
                boxShadow: "10px 10px 20px 5px #eee",
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
              <p><b>{entry.title}</b></p>
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
            <h5><b>Today's Mood</b></h5>
            <div className="divider"></div>
            {this.state.mood.map((mood) => 
            <div>
            <p style={{float: "left", margin: "25px"}}>High: <b>{mood.high}</b></p>
            <p style={{float: "left", margin: "25px"}}>Low: <b>{mood.low}</b></p>
            {mood.medication === true ? <p style={{float: "left", margin: "25px"}}><i className="material-icons">check</i> medication</p> : <p style={{float: "left", margin: "25px"}}>no medication</p>}
            {mood.exercise === true ? <p style={{float: "left", margin: "25px"}}><i className="material-icons">check</i> exercise</p> : <p style={{float: "left", margin: "25px"}}>no exercise</p>} 
            <br></br>
            <div className="divider" style={{clear: "left"}}></div>
            </div>)}
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