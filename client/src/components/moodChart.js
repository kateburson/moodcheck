import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

import API from "../utils/API";

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
          fill: "rgba(140,198,63,0.2)",
          borderColor: "rgba(140,198,63,1)",
          backgroundColor: "rgba(140,198,63,1)",
          pointBackgroundColor: "rgba(140,198,63,1)",
          pointBorderColor: "rgba(140,198,63,1)",
          pointHoverBackgroundColor: "rgba(140,198,63,1)",
          pointHoverBorderColor: "rgba(140,198,63,1)",
          data: this.state.range.highs
        },
        {
          label: "Low",
          fill: "rgba(150,150,150,0.2)",
          borderColor: "rgba(150,150,150,1)",
          backgroundColor: "rgba(150,150,150,1)",
          pointBackgroundColor: "rgba(150,150,150,1)",
          pointBorderColor: "rgba(150,150,150,1)",
          pointHoverBackgroundColor: "rgba(150,150,150,1)",
          pointHoverBorderColor: "rgba(150,150,150,1)",
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
