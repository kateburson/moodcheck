import React from "react";
import API from "../utils/API";
import { UserContext, Context } from "../context";

class Dashboard extends React.Component {
  render() {
    return(
      <Context.Consumer>
        {state => {
          console.log('current user:', this.state);
          return(
            <div>
              <h1>Dashboard</h1>
              <h3>Hey, {this.state}</h3>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Dashboard;