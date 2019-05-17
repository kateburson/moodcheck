import React from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../utils/API";

class Register extends React.Component {

  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    redirectToLogin: false
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
      .then(this.setState({redirectToLogin: true}));
    } else {
      alert("Passwords do not match");
    }
  };


  render() {
    const { redirectToLogin } = this.state

    if (redirectToLogin === true) {
      return <Redirect to="/login" />
    }

    return(
      <div className="valign-wrapper" style={{ 
        height: "100vh", 
        // background: "#FDFFC3",
        width: "100vw"
      }} >
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h1>Register</h1>
            <p>Already have an account?
              <Link to="/login"> Login</Link>
            </p>  
          </div>
        <form className="col s12 l6">
          <div class="row">
            <div class="input-field col s12">
              <input 
                id="name" 
                type="text" 
                class="validate" 
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label for="name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input 
                id="email" 
                type="email" 
                class="validate" 
                onChange={this.handleChange}
                value={this.state.email}
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input 
                id="password" 
                type="password" 
                class="validate" 
                onChange={this.handleChange}
                value={this.state.password}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input 
                id="password2" 
                type="password" 
                class="validate" 
                onChange={this.handleChange}
                value={this.state.password2}
              />
              <label for="password2">Confirm Password</label>
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
     </div> 
    </div>
    )
  }
}

export default Register;