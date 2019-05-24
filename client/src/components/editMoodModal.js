import React from "react";
import { Modal, Range } from "react-materialize";
import API from "../utils/API";
import moment from "moment";

class EditMoodModal extends React.Component {
  state = {
    high: "",
    low: "",
    medication: false,
    exercise: false 
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleCheckbox = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.id]: value });
  }

  editMood = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    const moodSurvey = {
      high: this.state.high,
      low: this.state.low,
      medication: this.state.medication,
      exercise: this.state.exercise 
    }
    console.log("mood survey", moodSurvey);
    API.editMood(moodSurvey, id);
  }

  render() {
    return(
      <div>
        <p>Mood (high)</p>
        <Range  
          min="1" 
          max="10" 
          id="high" 
          value={this.state.high}
          onChange={this.handleChange}
        />
        <br></br>
        <p>Mood (low)</p>
        <Range 
          min="1" 
          max="10" 
          id="low" 
          value={this.state.low}
          onChange={this.handleChange}/>
        <div
          className="switch s6"
          style={{
            margin: "15px"
          }}>
          <label>
          <input 
            type="checkbox"
            id="medication"
            value={this.state.medication}
            onChange={this.handleCheckbox}/>
          <span>Medication</span>
          </label>
        </div>
        <div 
          className="switch s6" 
          style={{
            margin: "15px"
          }}>
          <label>
          <input 
            type="checkbox" 
            id="exercise"
            value={this.state.exercise}
            onChange={this.handleCheckbox}/>
          <span>Exercise</span>
          </label>
        </div>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "2rem",
            background: "#FDFFC3",
            color: "black"
          }}
          className="btn waves-effect waves-light"
          type="button"
          onClick={(e) => this.editMood(e, this.props.id)}
          disabled={!Boolean(this.state.high && this.state.low)}>
          Submit
        </button>
      </div>
    )
  }
}

export default EditMoodModal