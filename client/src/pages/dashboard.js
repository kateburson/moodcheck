import React from "react";
import API from "../utils/API";

class Dashboard extends React.Component {
  
  // componentDidMount() {
  //   const token = localStorage.getItem("current_user_token");
  //   API.validateToken(token)
  //     .then(res => this.setState({name: res.name}))
  //     .catch(() => localStorage.removeItem('current_user_token'));
  //   }


  state = {
    name: ""
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <h3>Hey, {this.state.name}</h3>
      </div>
    )
  }

}

export default Dashboard;