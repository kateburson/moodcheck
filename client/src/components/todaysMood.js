import React from "react";
import moment from "moment";

import API from "../utils/API";
import { Modal } from "react-materialize";
import EditMoodModal from "../components/editMoodModal";


class TodaysMood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: []
    }
    this.updateMood = this.updateMood.bind(this)
  }

  updateMood(mood) {
    this.setState({
      mood: mood
    })
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");

    API.findMoods(id)
    .then(res => {
      console.log(res.data.mood);
      let result = res.data.mood.filter(mood => moment(mood.date).format("MMM DD YYYY") === moment().format("MMM DD YYYY"));
      this.setState({mood: result});
      console.log("this.state.mood", this.state.mood)
    })
  }

  removeMood = (e, id) => {
    e.preventDefault();
    API.removeMood(id);
  }

  render() {
    return(
      <div>
      {this.state.mood.map((mood) => 
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
            <EditMoodModal id={mood._id} data={mood} updateMood={this.updateMood}></EditMoodModal>
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