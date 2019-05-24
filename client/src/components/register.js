import React from "react";
import API from "../utils/API";

class Register extends React.Component {

  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onRegister = e => {
    e.preventDefault();
    if(this.state.password === this.state.password2) {
      const userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      API.register(userData)
      .then(this.props.view(false, false, false, true));
    } else {
      alert("Passwords do not match");
    }
  };


  render() {
    return(
      <div className="row">
        <div className="col s12 l6" style={{marginBottom: "50px"}}>
          <h1>Register</h1>
          <img style={{width: "150px", margin: "25px 0 10px 0"}} src="../../logo.png" alt="MoodCheckLogo" />
          <p>Already have an account?
            <a onClick={() => this.props.view(false, true, false, false)}><b> Login</b></a>
          </p>  
        </div>
        <form className="col s12 l6">
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="name" 
                type="text" 
                className="validate" 
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="email" 
                type="email" 
                className="validate" 
                onChange={this.handleChange}
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="password" 
                type="password" 
                className="validate" 
                onChange={this.handleChange}
                value={this.state.password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="password2" 
                type="password" 
                className="validate" 
                onChange={this.handleChange}
                value={this.state.password2}
              />
              <label htmlFor="password2">Confirm Password</label>
            </div>
          </div>
          <button 
            className="btn btn-large black white-text hoverable waves-effect waves-light"
            onClick={this.onRegister}
            disabled={!this.state.name || !this.state.email ||!this.state.password || !this.state.password2}
            >Register
          </button>
        </form>
      </div>
    )
  }
}

export default Register;