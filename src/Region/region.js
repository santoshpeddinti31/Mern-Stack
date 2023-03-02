import "../Region/region.css";
import { useState, useEffect } from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

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

const RegionData = function () {
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
            dataSet1.push(val.region.length);
            labels.push(val.region);
          }
          setVal({
            labels: labels,
            datasets: [
              {
                label: "Region",
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
    <div className="donut">
      <Doughnut data={val} options={options} />
    </div>
  );
};

export default RegionData;
