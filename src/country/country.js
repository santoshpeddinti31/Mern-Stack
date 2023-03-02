import React from "react";

import { useState, useEffect } from "react";

import "../country/country.css";

import { Radar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

Chartjs.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const options = {
  responsive: true,
  Plugins: {
    legend: {
      position: "bottom",
    },

    title: {
      display: true,
      text: "My Pie Chart",
    },
  },
};

const Country = function () {
  const [count, setCount] = useState({
    labels: [],
    datasets: [
      {
        label: "countries",
        data: [],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
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
            dataSet1.push(val.country.length);
            labels.push(val.country);
          }
          setCount({
            labels: labels,
            datasets: [
              {
                label: "countries",
                data: dataSet1,
                borderColor: [
                  "rgb(79, 100, 92)",
                  "rgb(10, 211, 234)",
                  "rgb(235, 51, 201)",
                ],
                backgroundColor: [
                  "rgb(79, 100, 92)",
                  "rgb(10, 211, 234)",
                  "rgb(235, 51, 201)",
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
    <div className="country">
      <Radar data={count} options={options} />
    </div>
  );
};
export default Country;
