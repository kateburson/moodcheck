import React from "react";

class YellowButton extends React.Component {
  render() {
    return(
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "2rem",
          background: "#8CC63F",
          color: "black"
        }}
        className="btn waves-effect waves-light"
        type="button">
        {this.props.children}
      </button>
    )
  }
}

export default YellowButton