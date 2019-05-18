import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import API from "../utils/API";

import SideNav from "../components/sideNav";
import Navbar from "../components/navbar";


class Journal extends React.Component {

  state = {
    title: "",
    body: ""
  }

  componentDidMount = () => {
    const id = localStorage.getItem("id");
    API.populateJournal(id)
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

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
      <div>
        <SideNav />
        <Navbar />
        <div className="container">
          <h2>Journal</h2>
          <Collapsible accordion={false}>
            <CollapsibleItem header="New Journal Entry" icon="add">

              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div class="input-field col s12">
                      <input 
                        id="title" 
                        type="text" 
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                      <label for="title">Title</label>
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
                        class="materialize-textarea"
                        value={this.state.body}
                        onChange={this.handleChange}
                      ></textarea>
                      <label for="body">Journal Entry</label>
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
                  disabled={!Boolean(this.state.title && this.state.body)}
                >
                  Submit
              </button>

            </CollapsibleItem>

            <CollapsibleItem header="Better safe than sorry. That's my motto." icon="filter_drama">
            Better safe than sorry. That's my motto.
            </CollapsibleItem>
            <CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" icon="place">
            Yeah, you do seem to have a little 'shit creek' action going.
            </CollapsibleItem>
            <CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" icon="whatshot">
            You know, FYI, you can buy a paddle. Did you not plan for this contingency?
            </CollapsibleItem>
          </Collapsible>

        </div>
      </div>
        
    )
  }
}

export default Journal
