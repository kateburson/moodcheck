import React from "react";
import { SideNav } from "react-materialize";
import { Link } from "react-router-dom";
import { AccountConsumer } from '../context';

class Nav extends React.Component {
  render() {
    return(
      <nav style={{
        background: "#FDFFC3", 
      }}>
        <div className="container" > 
          <Link
            to="/dashboard"
          >
            <img 
              src="../../logo.png"
              className="right"
              style={{
                height: "25px",
                marginTop: "15px"
              }}
              alt="MoodCheck Logo"
            />
          </Link>
        
        <SideNav trigger={<i className="material-icons black-text" style={{fontSize: "20pt"}}>menu</i>} options={{closeOnClick: true}}>
        <AccountConsumer>
       { value => {
        return(
          <div>
            <div className="row">
              <h5 className="left-align black-text" style={{lineHeight: "1.5em", paddingLeft: "20px", paddingTop: "10px"}}>
              <b>Hey there, {value.currentUser.name.split(" ")[0]}</b>
              </h5>
            </div>
            <div className="divider"></div>
            <Link to="/dashboard" id="dashboard" className="menu-item black-text">
              <i className="material-icons">dashboard</i>Dashboard 
            </Link>
            <Link id="checkpoints" className="menu-item black-text" to="/checkpoints">
              <i className="material-icons">schedule</i>Checkpoints
            </Link>
            <Link id="journal" className="menu-item black-text" to="/journal">
              <i className="material-icons">create</i>Journal
            </Link>
            <Link id="history" className="menu-item black-text" to="/history">
              <i className="material-icons">change_history</i>History
            </Link>
            <Link id="charts" className="menu-item black-text" to="/charts">
              <i className="material-icons">insert_chart_outlined</i>Charts
            </Link>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "2rem",
                marginLeft: "20px",
                background: "#FDFFC3",
                color: "black"
              }}
              onClick={this.logout}
              className="btn waves-effect waves-light hoverable"
            >
              Logout
            </button>
        </div>
        )
      }}
    </AccountConsumer>
        </SideNav>
        </div>
      </nav>
    )
  }
}

export default Nav