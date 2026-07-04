import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/salesranking") //to make this working add proxy in vite.config.js
      .then((response) => {
        setCarList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2>Car Brand Rankings (June Month)</h2>
        <br />
        <table className="table-box" border="1">
          <thead>
            <tr>
              <th>Position</th>
              <th>Brand Name</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {carList.map((list) => (
              <tr key={list.position}>
                <td>{list.position}</td>
                <td>{list.brand}</td>
                <td>{list.Country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
