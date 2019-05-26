import React from "react";

import API from "../utils/API";
import { Modal } from "react-materialize";
import EditMoodModal from "../components/editMoodModal";


class TodaysMood extends React.Component {
  
  removeMood = (e, id) => {
    e.preventDefault();
    API.removeMood(id)
    .then(() => this.props.updateMood([]))
  }

  render() {
    return(
      <div>
      {this.props.data.map((mood) => 
        <div key={mood._id}>
          <p style={{float: "left", margin: "25px 10px"}}>High: <b>{mood.high}</b></p>
          <p style={{float: "left", margin: "25px 10px"}}>Low: <b>{mood.low}</b></p>
          {mood.medication ? <p style={{float: "left", margin: "25px 10px"}}><i className="material-icons">check</i> medication</p> : <p style={{float: "left", margin: "25px 10px"}}>no medication</p>}
          {mood.exercise ? <p style={{float: "left", margin: "25px 10px"}}><i className="material-icons">check</i> exercise</p> : <p style={{float: "left", margin: "25px 10px"}}>no exercise</p>}
          <Modal 
            header="Edit Today's Mood" 
            trigger={<i className="material-icons" 
            style={{float: "right", margin: "25px 10px"}}
          >edit</i>}>
            <EditMoodModal id={mood._id} data={mood} updateMood={this.props.updateMood}></EditMoodModal>
          </Modal> 
          <i className="material-icons" style={{float: "right", margin: "25px 10px"}} onClick={(e) => this.removeMood(e, mood._id)}>delete</i>
          <br></br>
          <div className="divider" style={{clear: "right"}}></div>
        </div>)}
      </div>
    )
  }
}

export default TodaysMood