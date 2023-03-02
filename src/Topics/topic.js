import "../Topics/topic.css";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  // barThickness: 1,
  responsive: true,
  Plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "intensity in countries",
    },
  },
};

const LineBar = function () {
  const [line, setLine] = useState({
    labels: [],
    datasets: [
      {
        label: [],
        data: [],
        // borderColor: "purple",
        backgroundColor: "green",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:5000/alldata";
      const dataSet1 = [];
      const labels = [];
      await fetch(url)
        .then((data) => {
          console.log("API Data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("it is res", res);

          for (const val of res) {
            dataSet1.push(val.topic.length);
            labels.push(val.topic);
          }
          setLine({
            labels: labels,
            datasets: [
              {
                label: "Topic",
                data: dataSet1,
                // borderColor: [
                //   "rgb(124, 127, 215)",
                //   "rgb(65, 150, 110)",
                //   "rgb(149, 190, 91)",
                //   "rgb(196, 177, 87)",
                //   "rgb(93, 162, 165)",
                // ],
                backgroundColor: [
                  "rgb(124, 127, 215)",
                  "rgb(65, 150, 110)",
                  "rgb(149, 190, 91)",
                  "rgb(196, 177, 87)",
                  "rgb(93, 162, 165)",
                ],
              },
            ],
          });
          console.log("arrData", dataSet1);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="line">
      <Line data={line} options={options} />
    </div>
  );
};
export default LineBar;
