import React from "react";
import API from "../utils/API";
import { Line } from 'react-chartjs-2';


class MoodChart extends React.Component {

  state = {
    chartData: {},
    // chartOptions: {}
  }

  componentDidMount() {
    // const id = localStorage.getItem("id");
    // API.findMoods(id)
    // .then(res => console.log(res.data));
    const data = {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [
        {
          label: "Highs",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Lows",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.setState({chartData: data})
  
  }

  
  render() {
    return(
      <Line data={this.state.chartData} width="600" height="250"/>
    )
  }
}

export default MoodChart