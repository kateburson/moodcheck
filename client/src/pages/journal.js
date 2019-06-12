import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";
import moment from "moment";
import { Modal } from "react-materialize";

import Nav from "../components/sideNav";
import JournalForm from"../components/journalForm";
import EditJournalModal from "../components/editJournalModal";

class Journal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      journal: [],
    }
    this.updateJournal = this.updateJournal.bind(this);
    this.newJournal = this.newJournal.bind(this);
  }

  updateJournal = journal => this.setState({journal: journal});
  newJournal = journal => this.state.journal.push({journal});

  removeJournal = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    API.removeJournal(id)
    .then(() => this.updateJournal([]))
  }
  
  render() {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => this.setState({journal: res.data.journal}))
    return(
      <div style={{height: "100vh", width: "100vw", backgroundImage: 'url("../../greendaisy.png")'}}>
        <Nav />
        <div className="container">
          <h3>Journal</h3>
          <Collapsible accordion={false}>
            <CollapsibleItem header="New Journal Entry" icon="add">
              <JournalForm newJournal={this.newJournal}/>
            </CollapsibleItem>
          </Collapsible>

          <Collapsible accordion={false}>
            {this.state.journal.map((entry) => 
            <CollapsibleItem 
              header={moment(entry.date).format("MMM Do YYYY") + " " + entry.title} 
              key={entry.id}
              className="grey lighten-4"
            >
              {entry.body}
              <Modal 
                header="Edit Today's Journal" 
                trigger={<i className="material-icons" 
                style={{float: "right", margin: "25px 10px"}}
              >edit</i>}>
                <EditJournalModal updateJournal={this.props.updateJournal} id={entry._id} data={entry} />
              </Modal> 
              <i 
                className="material-icons right" 
                style={{margin: "25px 10px"}} 
                onClick={(e) => this.removeJournal(e, entry._id)}>
                  delete
              </i>
            </CollapsibleItem>)}
          </Collapsible>
        </div>
      </div>
        
    )
  }
}

export default Journal
