import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type LineChartParams = {
  width?: number;
  height?: number;
  lineColor?: string;
  pointColor?: string;
  backgroundColor?: string;
  title?: string;
};

const LineChart: FC<LineChartParams> = ({
  width = 600, 
  height = 400,
  lineColor,
  pointColor,
  backgroundColor = '#082F57',
  title
}: LineChartParams) => {
    return (
      <div
      className="rounded"
      style={{
        width, 
        height, 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 20, 
        paddingBottom: 40, 
        backgroundColor 
        }}
      >
        <h6 style={{color: 'grey'}}>OVERVIEW</h6>
        <h4 style={{color: 'white'}}>{title}</h4>
        <Line
          data={{
            labels: [
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133],
                label: "Value",
                borderColor: lineColor ?? "#5E72E4",
                backgroundColor: pointColor ?? "#7bb6dd",
                fill: false,
              }
              ]
          }}
        />
      </div>
    );
  };
  export default LineChart;