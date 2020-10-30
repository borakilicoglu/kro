import React from "react";
import ReactApexChart from "react-apexcharts";

export default class UniqueVisitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seriesSpark3: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      optionsSpark3: {
        chart: {
          type: "line",
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.optionsSpark3}
        series={this.state.seriesSpark3}
        type="area"
        height={75}
        width={"100%"}
      />
    );
  }
}
