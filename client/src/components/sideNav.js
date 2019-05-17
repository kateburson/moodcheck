import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { AccountConsumer } from '../context';

class SideNav extends Component {

  componentDidMount() {
    
  }

  render() {
  return (
    <AccountConsumer>
      { value => {
        return(
        <div>
          <Menu>
            <div className="row">
              <h5 className="left-align" style={{lineHeight: "1.5em"}}>
                <b>Hey there, {value.currentUser.name.split(" ")[0]}</b>
              </h5>
            </div>

            <Link to="/dashboard" id="dashboard" className="menu-item waves-effect">
              <i class="material-icons">dashboard</i>Dashboard 
            </Link>
            <Link id="checkpoints" className="menu-item" to="/checkpoints">
              <i class="material-icons">schedule</i>Checkpoints
            </Link>
            <Link id="journal" className="menu-item" to="/journal">
              <i class="material-icons">create</i>Journal
            </Link>
            <Link id="history" className="menu-item" to="/history">
              <i class="material-icons">change_history</i>History
            </Link>
            <Link id="charts" className="menu-item" to="/charts">
              <i class="material-icons">insert_chart_outlined</i>Charts
            </Link>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "2rem",
                background: "#FDFFC3",
                color: "black"
              }}
              // onClick={this.logout}
              className="btn waves-effect waves-light hoverable"
            >
              Logout
            </button>
          </Menu>
        </div>
        )
      }}
    </AccountConsumer>
  )
  }
}

export default SideNav;