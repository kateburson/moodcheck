import React from "react";
import { Redirect } from "react-router-dom";

import API from "../utils/API";
import Landing from "../components/landing";
import Login from "../components/login";
import Register from "../components/register";


class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      landing: true,
      login: false,
      register: false,
      redirectToDashboard: false
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(landing, login, register, dashboard) {
    this.setState({
      landing: landing,
      login: login,
      register: register,
      redirectToDashboard: dashboard
    })
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("current_user_token");

  //   if (token) {
  //     API.validateToken(token)
  //       .then(this.setState({redirectToDashboard: true}))
  //       .catch(() => localStorage.removeItem("current_user_token"));
  //   }
  // }

  render() {
    const { redirectToDashboard } = this.state
    if (redirectToDashboard === true) {return <Redirect to="/dashboard" />}
    return(
      <div className="valign-wrapper" style={{ 
        height: "100vh",
        top: "-350px",
        background: "rgba(253, 255, 195, .9)",
        width: "100vw",
        zIndex: 1
      }} >
        <div style={{position:"fixed", top: "-50px", width:"100%", height:"100%", zIndex:-100 }}>
          <video autoPlay muted loop src="../../calflowers.MOV"></video>
        </div>
        <div className="container">
          { this.state.landing ? <Landing view={this.changeView} /> : null }
          { this.state.login ? <Login view={this.changeView} /> : null}
          { this.state.register ? <Register view={this.changeView} /> : null}
        </div>
      </div>
    )
  }
}

export default Splash