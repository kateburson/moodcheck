import React from "react";
import { Line } from "react-chartjs-2";
import moment, { weekdaysMin } from "moment";
import { RadioGroup } from "react-materialize";

import API from "../utils/API";
import Nav from "../components/sideNav";

class Charts extends React.Component {

  state = {
    chartData: {},
    radio: "0",
    range: [{
      highs: [],
      lows: [],
      labels: []
    },
    {
      highs: [],
      lows: [],
      labels: []
    },
    {
      highs: [],
      lows: [],
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }]
  }

  componentWillMount = () => {
    const id = localStorage.getItem("id");
    API.findMoods(id)
    .then(res => {
    const lastWeek = moment().startOf('day').subtract(1,'week');
    const lastMonth = moment().startOf('day').subtract(1,'month');
    const lastYear = moment().startOf('day').subtract(1,'year');
    var yesterdayEndOfRange =  moment().endOf('day').subtract(1,'day');
    const week = res.data.mood.filter(mood => moment(mood.date).isBetween(lastWeek, yesterdayEndOfRange))
    week.map(day => this.state.range[0].highs.push(day.high));
    week.map(day => this.state.range[0].lows.push(day.low));
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    week.map(day => this.state.range[0].labels.push(weekdays[moment(day.date).day()]));
    const month = res.data.mood.filter(mood => moment(mood.date).isBetween(lastMonth, yesterdayEndOfRange));
    month.map(day => this.state.range[1].highs.push(day.high));
    month.map(day => this.state.range[1].lows.push(day.low));
    const year = res.data.mood.filter(mood => moment(mood.date).isBetween(lastYear, yesterdayEndOfRange));
    year.map(day => this.state.range[2].highs.push(day.high));
    year.map(day => this.state.range[2].lows.push(day.low));
    }).then(() => {this.buildChart()})
  }

  buildChart = () => {
    const data = {
      labels : this.state.range[Number(this.state.radio)].labels,
      datasets: [
        {
          label: "High",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: this.state.range[Number(this.state.radio)].highs
        },
        {
          label: "Low",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.state.range[Number(this.state.radio)].lows
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
      <div>
        <Nav />
        <div>
          <RadioGroup
            name="dateRange"
            label="Date Range"
            value={this.state.radio}
            options={[{label: "week", value: "0"}, {label: "month", value: "1"}, {label: "year", value: "2"}]}
            onChange={this.handleChange}
          />
        </div>
        <Line data={this.state.chartData} />
      </div>
    )
  }
}

export default Charts
