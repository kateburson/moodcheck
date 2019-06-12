import React from "react";
import { Range } from "react-materialize";
import API from "../utils/API";

class EditMoodModal extends React.Component {

  state = {
    high: this.props.data.high,
    low: this.props.data.low,
    medication: this.props.data.medication,
    exercise: this.props.data.exercise,
    id: localStorage.getItem("id")
  }

  componentDidMount = () => {
    this.state.medication ? this.refs.medication.checked = true : this.refs.medication.checked = false;
    this.state.exercise ? this.refs.exercise.checked = true : this.refs.exercise.checked = false;
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
    };
    API.editMood(moodSurvey, id)
    .then(() => this.props.updateMood([moodSurvey]))
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
            ref="medication"
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
            ref="exercise"
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
            background: "#8CC63F",
            color: "black"
          }}
          className="btn waves-effect waves-light"
          type="button"
          onClick={(e) => this.editMood(e, this.state.id)}>
          Submit
        </button>
      </div>
    )
  }
}

export default EditMoodModal