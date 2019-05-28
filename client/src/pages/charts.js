import React from "react";
import { Line } from 'react-chartjs-2';
import moment from "moment";

import API from "../utils/API";
import Nav from "../components/sideNav";

class Charts extends React.Component {

  state = {
    moods: [],
    highs: [],
    lows: [],
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    chartData: {}
  }

  componentWillMount = () => {
    const id = localStorage.getItem("id");
    API.findMoods(id)
    .then(res => {
      res.data.mood.map(mood => this.state.highs.push(Number(mood.high)));
      res.data.mood.map(mood => this.state.lows.push(Number(mood.low)));
      console.log(moment(res.data.mood[0].date).day())
    }).then(() => {
      const data = {
      labels : this.state.labels,
      datasets: [
        {
          label: "High",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.highs
        },
        {
          label: "Low",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.state.lows
        }
      ]
    }
    this.setState({chartData: data})
    console.log(this.state.chartData)
    });
  }
  
  render() {
    return(
      <div>
        <Nav />
        <Line data={this.state.chartData} />
      </div>
    )
  }
}

export default Charts
