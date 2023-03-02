import React, { Fragment } from "react";
import Horizontalchart from "./intensity/Intensity";
import "./App.css";
import LikeHood from "./likehood/likelyhood";
import BarChart from "./Relevence/relevence";
import RegionData from "./Region/region";
import LineBar from "./Topics/topic";
import Country from "./country/country";
import YearData from "./year/year";
function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:5000/alldata").then((arr) => setItem(arr.data));
  // }, []);

  return (
    <Fragment>
      <div className="container">
        <h5>Dashboard</h5>
      </div>
      <div className="chart">
        <div className="intensity">
          <h6>Intensity</h6>
          <Horizontalchart />
        </div>
        <div className="likeyhood">
          <h6>Likely Hood</h6>
          <LikeHood />
        </div>
        <div className="relevence">
          <h6>Intensity</h6>
          <BarChart />
        </div>
        <div className="region">
          <h6>Region</h6>
          <RegionData />
        </div>
      </div>
      <div className="chart2">
        <div className="topic">
          <h6>Topic</h6>
          <LineBar />
        </div>
        <div className="countrydata">
          <h6>Country</h6>
          <Country />
        </div>
        <div className="yearlist">
          <h6>Year</h6>
          <YearData />
        </div>
      </div>
    </Fragment>
  );
}

// {
/* <center>
        {item.map((task) => (
          <div key={task._id}>
            <h6>{task.region}</h6>
          </div>
        ))}
      </center> */
// }

export default App;
