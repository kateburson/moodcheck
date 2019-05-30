import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";

import Nav from "../components/sideNav";

class History extends React.Component {

  state = {
    moods: [],
    currentJournalBody: "",
    currentJournalTitle: ""
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");
    API.findMoods(id)
    .then(res => this.setState({moods: res.data.mood}))
  }

  findJournal = (props) => {
    API.journalByDate(props)
    .then(res => this.setState({
      currentJournalBody: res.data.journal.body, 
      currentJournalTitle: res.data.journal.title
    }));
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
              header={mood.date.split("T")[0]} 
              key={mood.id}
              className="grey lighten-4"
              onClick={this.findJournal(mood.date)}
            >
              <p><b>Mood</b></p>
              high: {mood.body}
              <br />
              low: {mood.low}
              <br />
              medication: {mood.medication ? <span>taken</span> : <span>not taken</span>}
              exercise: {mood.exercise ? <span>yes</span> : <span>no</span>}
              <p><b>Journal</b></p>
              <p>{this.state.currentJournalTitle}</p>
              <p>{this.state.currentJournalBody}</p>
            </CollapsibleItem>)}
          </Collapsible>
        </div>
      </div>
        
    )
  }
}

export default History
