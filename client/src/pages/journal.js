import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";

import Nav from "../components/sideNav";
import JournalForm from"../components/journalForm";

class Journal extends React.Component {

  state = {
    journal: []
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => this.setState({journal: res.data.journal}))
  }

  
  render() {
    return(
      <div style={{height: "100vh", width: "100vw", backgroundImage: 'url("../../moddaisy.png")'}}>
        <Nav />
        <div className="container">
          <h3>Journal</h3>
          <Collapsible accordion={false}>
            <CollapsibleItem header="New Journal Entry" icon="add">
              <JournalForm />
            </CollapsibleItem>
          </Collapsible>

          <Collapsible accordion={false}>
            {this.state.journal.map((entry) => 
            <CollapsibleItem 
              header={entry.date.split("T")[0] + " " + entry.title} 
              key={entry.id}
              className="grey lighten-4"
            >
              {entry.body}
            </CollapsibleItem>)}
          </Collapsible>
        </div>
      </div>
        
    )
  }
}

export default Journal
