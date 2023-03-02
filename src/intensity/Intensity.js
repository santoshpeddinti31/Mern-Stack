import "../intensity/Intensity.css";
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
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  barThickness: 2,

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

const Horizontalchart = () => {
  const [all, setAll] = useState({
    labels: [],
    datasets: [
      {
        label: [],
        data: [],
        borderColor: "purple",
        backgroundColor: [
          "green",
          "blue",
          "yellow",
          "purple",
          "red",
          "black",
          "aqua",
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
            dataSet1.push(val.intensity);
            labels.push(val.country);
          }
          setAll({
            labels: labels,
            datasets: [
              {
                label: "intensity",
                data: dataSet1,
                borderColor: "purple",
                backgroundColor: [
                  " rgb(122, 122, 211)",
                  " rgb(149, 211, 149)",
                  " rgb(218, 137, 137)",
                  "rgb(204, 204, 145)",
                  "rgb(203, 155, 203)",
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
    <div className="card">
      {console.log("dataaaa", all)}
      <Bar data={all} options={options} />
    </div>
  );
};

export default Horizontalchart;
