import React from "react";
import moment from "moment";

import API from "../utils/API";
import { Modal } from "react-materialize";
import EditJournalModal from "../components/editJournalModal";


class TodaysMood extends React.Component {
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


  removeJournal = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    API.removeJournal(id);
  }

  render() {
    return(
      <div>
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
    )
  }
}

export default TodaysMood
