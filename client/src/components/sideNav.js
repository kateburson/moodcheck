import React from "react";
import { SideNav } from "react-materialize";
import { Link, Redirect } from "react-router-dom";
import { AccountConsumer } from '../context';

class Nav extends React.Component {

  state ={
    redirectToLogin: false
  }

  logout = () => {
    localStorage.clear();
    this.setState({redirectToLogin: true});
  }

  render() {
    const { redirectToLogin } = this.state

    if (redirectToLogin === true) {
      return <Redirect to="/" />
    }
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
        
        <SideNav trigger={<i className="material-icons black-text" style={{fontSize: "20pt", height: "100%"}}>menu</i>} options={{closeOnClick: true}}>
        <AccountConsumer>
       { value => {
        return(
          <div className="grey darken-4" style={{height: "100vh", paddingTop: "25px"}}>

              <h5 className="left-align white-text" style={{lineHeight: "1.5em", padding: "20px", paddingTop: "10px"}}>
              <b>{value.currentUser.name}</b>
              </h5>

            <div className="row">
              <Link to="/dashboard" id="dashboard" className="menu-item white-text">
                <i className="material-icons">dashboard</i>Dashboard 
              </Link>
              <Link id="checkpoints" className="menu-item white-text" to="/checkpoints">
                <i className="material-icons">schedule</i>Checkpoints
              </Link>
              <Link id="journal" className="menu-item white-text" to="/journal">
                <i className="material-icons">create</i>Journal
              </Link>
              <Link id="history" className="menu-item white-text" to="/history">
                <i className="material-icons">change_history</i>History
              </Link>
              <Link id="charts" className="menu-item white-text" to="/charts">
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
              <div className="valign-bottom right">
                <img src="../../daisy.png" alt="daisy" style={{height: "250px", paddingRight: "25px", marginBottom: "0px"}} />
              </div>
            </div>   
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