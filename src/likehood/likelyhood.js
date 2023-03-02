import React, { useEffect, useState } from "react";
import "../likehood/likelyhood.css";

import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);
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

const LikeHood = function () {
  const [val, setVal] = useState({
    labels: [],
    datasets: [
      {
        label: "likehood",
        data: [],
        borderColor: "purple",
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
          setVal({
            labels: labels,
            datasets: [
              {
                label: "likely hood",
                data: dataSet1,
                borderColor: [
                  "rgb(79, 100, 92)",
                  "rgb(10, 211, 234)",
                  "rgb(235, 51, 201)",
                  "rgb(125, 210, 83)",
                  "rgb(206, 151, 50)",
                  "rgb(216, 111, 26)",
                  "rgb(146, 141, 86)",
                  "rgb(36, 101, 126)",
                  "rgb(136, 191, 16)",
                  "rgb(26, 131, 46)",
                ],
                backgroundColor: [
                  "rgb(79, 100, 92)",
                  "rgb(10, 211, 234)",
                  "rgb(235, 51, 201)",
                  "rgb(125, 210, 83)",
                  "rgb(206, 151, 50)",
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
    <div className="pie">
      <Pie data={val} options={options} />
    </div>
  );
};

export default LikeHood;
