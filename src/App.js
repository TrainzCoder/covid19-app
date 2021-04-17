import React, { useEffect, useState } from "react";
import { hot } from 'react-hot-loader/root';
import "@babel/polyfill"
import "./assets/css/style.css";
import axios from "axios";
import {DataContext} from "./context/index";

// import FetchData from "./api/index";

import Card from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import Switcher from "./components/Switcher/Switcher";


function App() {

const [data,setData] = useState({});
const getData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries/indonesia?strict=true')
  setData(response.data);
}
 useEffect(() => {
   getData();
 },[])

  return(
    <DataContext.Provider value={{data}}>
    <Switcher />
    <div className="container">
      <div className="title">
        <h1>COVID 19 TRACKER</h1>
        <h3>INDONESIA</h3>
      </div>
      <Card />
      <Chart />
    </div>
    <div className="author">
      <h5>Created By TrainzCoder</h5>
    </div>
    </DataContext.Provider>
  )
}

export default hot(App);
