import React from "react";
import API from "../utils/API";
import M from "react-materialize";

class EditMoodModal extends React.Component {
  state = {
    title: this.props.data.title,
    body: this.props.data.body
  }

  componendDidMount() {
    M.updateTextFields()
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  editJournal = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    const updatedEntry = {
      title: this.state.title,
      body: this.state.body,
    }
    console.log("mood survey", updatedEntry);
    API.editJournal(updatedEntry, id)
    .then(() => this.props.updateJournal([updatedEntry]))
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
            marginTop: "2rem",
            background: "#FDFFC3",
            color: "black"
          }}
          className="btn waves-effect waves-light"
          type="button"
          onClick={(e) => this.editJournal(e, this.state.id)}
          disabled={!Boolean(this.state.title && this.state.body)}>
          Submit
        </button>
      </div>
    )
  }
}

export default EditMoodModal