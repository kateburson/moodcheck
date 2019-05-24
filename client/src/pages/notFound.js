import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return(
      <div 
        className="grey darken-4" 
        style={{
          height: "100vh", 
          width: "100vw", 
          padding: "25px"
        }}>
        <div>
          <h2 className="white-text">Page not found</h2>
          <Link to="/"><i className="material-icons">keyboard_backspace</i>Back to Mood Check</Link>
        </div>
        <img 
          src="../../daisy.png" alt="sad daisy" 
          className="right"
          style={{
            height: "85vh"
          }}/>
      </div>
    )
  }
}

export default NotFound