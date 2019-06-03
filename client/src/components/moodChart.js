import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

import API from "../utils/API";
import Nav from "../components/sideNav";

class MoodChart extends React.Component {

  state = {
    chartData: {},
    range: {
      // last month
      highs: [],
      lows: [],
      labels: []
    },
  }

  componentWillMount = () => {
    const id = localStorage.getItem("id");
    API.findMoods(id)
    .then(res => {
    const lastMonth = moment().startOf('day').subtract(1,'month');
    var yesterdayEndOfRange =  moment().endOf('day').subtract(1,'day');

    const month = res.data.mood.filter(mood => moment(mood.date).isBetween(lastMonth, yesterdayEndOfRange));
    month.map(day => this.state.range.highs.push(day.high));
    month.map(day => this.state.range.lows.push(day.low));
    month.map(day => this.state.range.labels.push(moment(day.date).format("DD")))

    }).then(() => {this.buildChart()})
  }

  buildChart = () => {
    const data = {
      labels : this.state.range.labels,
      datasets: [
        {
          label: "High",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.range.highs
        },
        {
          label: "Low",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.state.range.lows
        }
      ]
    }
    this.setState({chartData: data})
    console.log(this.state.chartData)
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ radio: e.target.value });
    this.buildChart();
  }
  
  render() {
    return(
      <div style={{background: "white"}}>
        <Line data={this.state.chartData} />
      </div>
    )
  }
}

export default MoodChart
