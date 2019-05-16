import React from "react";
import SideNav from "../components/sideNav";
import Navbar from "../components/navbar";
// import API from "../utils/API";

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <SideNav />
        <Navbar />
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard;