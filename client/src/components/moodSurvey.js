
import React from "react";
import { Range } from "react-materialize";

class MoodSurvey extends React.Component {

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

  handleSubmit = () => {
    console.table(this.state);
  }

  render() {
    return(
      <div 
        style={{
          boxShadow: "5px 5px 20px 5px #eee",
          padding: "25px"
        }}
      >
        <h5><b>Mood Survey</b></h5>
          <p>Mood (high): {this.state.high}</p>
          <Range  
            min="1" 
            max="10" 
            id="high" 
            value={this.state.high}
            onChange={this.handleChange}
          />

          <p>Mood (low): {this.state.low}</p>
          <Range 
            min="1" 
            max="10" 
            id="low" 
            value={this.state.low}
            onChange={this.handleChange}
          />

        <div
          className="switch s6"
          style={{
            margin: "15px"
          }}
        >
          <label>
          <input 
            type="checkbox"
            id="medication"
            value={this.state.medication}
            onChange={this.handleCheckbox}
          />
          <span>Medication</span>
          </label>
        </div>
        <div 
          className="switch s6" 
          style={{
            margin: "15px"
          }}
        >
          <label>
          <input 
            type="checkbox" 
            id="exercise"
            value={this.state.exercise}
            onChange={this.handleCheckbox}
          />
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
          className="btn waves-effect waves-light hoverable"
          type="button"
          onClick={this.handleSubmit}
          disabled={!Boolean(this.state.high && this.state.low)}
        >
          Submit
      </button>
      </div>
    )
  }
}

export default MoodSurvey;