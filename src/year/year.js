import "../year/year.css";
import { useEffect, useState } from "react";

import axios from "axios";

const YearData = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/alldata").then((arr) => setDate(arr.data));
  }, []);

  return (
    <div className="dot">
      <div className="year">
        {data.map((item) => (
          <p>
            {item.end_year === "" ? "N.A" : item.end_year}
            &nbsp;&nbsp;&nbsp;&nbsp;<span>{item.country}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default YearData;
