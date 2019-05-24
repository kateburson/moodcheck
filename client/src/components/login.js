import React, { Component } from "react";
import API from "../utils/API";
import { AccountConsumer } from "../context";

class Login extends Component {

  state = {
    email: "",
    password: "",
    name: ""
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  login = setCurrentUser => {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    API.login(userData).then(res => {
      localStorage.setItem("current_user_token", res.data.token);
      console.log("Database Response:", res);
      const currentUser = {
          name: res.data.name,
          email: res.data.email,
          id: res.data.id
        }
      localStorage.setItem("name", currentUser.name);
      localStorage.setItem("email", currentUser.email);
      localStorage.setItem("id", currentUser.id);
    })
    .then(this.props.view(false, false, false, true))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <AccountConsumer>
        {value => {
          return (
            <div className="row">
              <div className="col s12 l6">
                <h1>Login</h1>
                <img style={{width: "150px", margin: "25px 0 10px 0"}} src="../../logo.png" alt="MoodCheckLogo" />
                <p>Don't have an account?
                  <a onClick={() => this.props.view(false, false, true, false)}><b> Register</b></a>
                </p>  
              </div>
            <form className="col s12 l6">
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
              <button 
                className="btn btn-large black white-text hoverable waves-effect waves-light"
                disabled={!Boolean(this.state.email && this.state.password)}
                type="button"
                onClick={() => this.login(value.setCurrentUser)}
                >Login
              </button>
            </form>
          </div>
        )
        }}
      </AccountConsumer>
    )
  }
}
export default Login;