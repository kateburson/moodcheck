import React from "react";

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
        <h2 
          className="white-text" 
          style={{
            marginLeft: "25px"
          }}>Page not found.
        </h2>
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