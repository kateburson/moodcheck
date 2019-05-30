import React from "react";
import API from "../utils/API";

class JournalForm extends React.Component {

  state = {
    title: "",
    body: ""
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const entry = {
      title: this.state.title,
      body: this.state.body
    }
    const id = localStorage.getItem("id");
    API.newEntry(entry, id)
    .then(() => this.props.updateJournal([entry]))
    .then(() => {
      this.setState({title: "", body: ""});
      this.props.view(this.props.state.viewMoodSurvey, false)
    })
  }

  render() {
    return(
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="title" 
                type="text" 
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea 
                id="body" 
                className="materialize-textarea"
                value={this.state.body}
                onChange={this.handleChange}
              ></textarea>
              <label htmlFor="body">Journal Entry</label>
            </div>
          </div>
        </form>
      </div>

      <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            background: "#FDFFC3",
            color: "black"
          }}
          className="btn waves-effect waves-light hoverable"
          type="button"
          onClick={this.handleSubmit}
          disabled={!Boolean(this.state.body)}
        >
          Submit
      </button>
    </div>
    )
  }
}

export default JournalForm