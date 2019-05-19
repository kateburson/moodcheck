import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";

import SideNav from "../components/sideNav";
import Navbar from "../components/navbar";


class Journal extends React.Component {

  state = {
    title: "",
    body: "",
    journal: []
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => this.setState({journal: res.data.journal}))
  }

  componentDidUpdate = () => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
    .then(res => this.setState({journal: res.data.journal}))
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
    .then(this.setState({title: "", body: ""}))
  }

  render() {
    return(
      <div style={{height: "100vh", width: "100vw"}}>
        <SideNav />
        <Navbar />
        <div className="container">
          <h3>Journal</h3>
          <Collapsible accordion={false}>
            <CollapsibleItem header="New Journal Entry" icon="add">

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
                  className="btn waves-effect waves-light hoverable"
                  type="button"
                  onClick={this.handleSubmit}
                  disabled={!Boolean(this.state.body)}
                >
                  Submit
              </button>
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
