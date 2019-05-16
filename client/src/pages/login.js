import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../utils/API";
import { AccountConsumer } from "../context";

class Login extends Component {

  state = {
    email: "",
    password: "",
    redirectToDashboard: false,
  };

  // componentDidMount() {
  //   const token = localStorage.getItem("current_user_token");

  //   if (token) {
  //     API.validateToken(token)
  //       .then(this.props.history.push({
  //         pathname: "/dashboard",
  //         state: { currentUser: this.state.currentUser }
  //       }))
  //       .catch(() => localStorage.removeItem("current_user_token"));
  //   }
  // }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  login = setCurrentUser => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log("user data:", userData);
    API.login(userData)
    .then(res => {
      console.log(res[0]);
      localStorage.setItem("current_user_token", res.data.token);
      const currentUser = {
        name: res[0].name,
        email: res[0].email
      }
      console.log(currentUser);
      setCurrentUser({currentUser});
    })
    .then(<Redirect to="/dashboard" />)
    .catch(err => console.log(err));
  }

  render() {
    return(
      <AccountConsumer>
        { value => {
          return (
            <div className="valign-wrapper" style={{ 
              height: "100vh", 
              // background: "#FDFFC3",
              width: "100vw"
            }} >
            <div className="container">
              <div className="row">
                <div className="col s12 l6">
                  <h1>Login</h1>
                  <p>Don"t have an account?
                    <Link to="/register"> Register</Link>
                  </p>  
                </div>
              <form className="col s12 l6">
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
                <button 
                  className="btn btn-large black white-text hoverable waves-effect waves-light"
                  disabled={!Boolean(this.state.email && this.state.password)}
                  type="button"
                  onClick={() => this.login(value.updateAccount)}
                  >Login
                </button>
              </form>
            </div>
          </div> 
          </div>
          )
        }}
      </AccountConsumer>
    )
  }
}

export default { Login };