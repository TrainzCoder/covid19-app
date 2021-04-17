import React, { useContext } from "react";
import {DataContext} from "../../context/index";
import "./Card.css";
import numeral from "numeral";

const Card = (props) => {
  const {data} = useContext(DataContext);

  const date =  new Date(Date.now()).toLocaleString();

  return(
    <>
      <div className="card-box">
        <div className="card infected">
          <h3>{numeral(data.cases).format('0,0')}</h3>
          <p>Infected</p>
        </div>
        <div className="card recovered">
          <h3>{numeral(data.recovered).format('0,0')}</h3>
          <p>Recovered</p>
        </div>
        <div className="card death">
          <h3>{numeral(data.deaths).format('0,0')}</h3>
          <p>Death</p>
        </div>
      </div>
      <h4 className="time-info">Last Update {date}</h4>
    </>
  )
}

export default Card;