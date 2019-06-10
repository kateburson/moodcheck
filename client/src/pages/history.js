import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";
import moment from "moment";

import Nav from "../components/sideNav";

class History extends React.Component {

  state = {
    moods: [],
    currentJournal: []
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");
    API.findMoods(id)
    .then(res => this.setState({moods: res.data.mood}))
  }

  populateJournal = (props) => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => {
      let result = res.data.journal.filter(entry => moment(entry.date).format("MMM DD YYYY") === moment(props).format("MMM DD YYYY"));
      console.log(result);
      this.setState({currentJournal: result})
    });
  }
  
  render() {
    return(
      <div style={{height: "100vh", width: "100vw", backgroundImage: 'url("../../moddaisy.png")'}}>
        <Nav />
        <div className="container">
          <h3>Mood History</h3>
          <Collapsible accordion={false}>
            {this.state.moods.map((mood) => 
            <CollapsibleItem 
              header={moment(mood.date).format("MMM Do YYYY")} 
              key={mood.id}
              className="grey lighten-4"
              onClick={() => this.populateJournal(mood.date)}
            >
              <h5><b>Mood</b></h5>
              high: {mood.high}
              <br />
              low: {mood.low}
              <br />
              medication: {mood.medication ? <span>taken</span> : <span>not taken</span>}
              <br />
              exercise: {mood.exercise ? <span>yes</span> : <span>no</span>}
              <br />
              <h5><b>Journal</b></h5>
              {this.state.currentJournal.map((result) =>
                <div>
                  <p><b>{result.title}</b></p> 
                  <p>{result.body}</p>
                </div>
              )}
              
            </CollapsibleItem>)}
          </Collapsible>
        </div>
      </div>
        
    )
  }
}

export default History
