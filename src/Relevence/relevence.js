import React from "react";

import "../Relevence/relevence.css";
import { useEffect, useState } from "react";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  barThickness: 1,

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

const BarChart = () => {
  const [all, setAll] = useState({
    labels: [],
    datasets: [
      {
        label: [],
        data: [],
        borderColor: "purple",
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
            dataSet1.push(val.intensity);
            labels.push(val.country);
          }
          setAll({
            labels: labels,
            datasets: [
              {
                label: "Relevence",
                data: dataSet1,
                borderColor: "purple",
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
    <div className="bar">
      {console.log("dataaaa", all)}
      <Bar data={all} options={options} />
    </div>
  );
};

export default BarChart;
