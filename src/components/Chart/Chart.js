import React from "react"
import { useContext } from "react";
import {DataContext} from "../../context/index";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {

  const {data} = useContext(DataContext);
  console.log(data);
  

  const dataBar = {
    labels: ['Infected','Recovered','Death'],
    datasets: [
      {
        label: 'Current State In Indonesia',
        data: [data.cases, data.recovered, data.deaths],
        backgroundColor: [
          'rgba(13, 98, 163, 0.35)',
          'rgba(49, 158, 27, 0.35)',
          'rgba(242, 63, 63, 0.35)',
        ],
        borderColor: [
          'rgba(13, 98, 163, 1)',
          'rgba(49, 158, 27, 1)',
          'rgba(242, 63, 63, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  }
  

  return(
    <div className="chart-box">
     {
       data ? ( <Bar data={dataBar} options={options} />) : <h4>Chart</h4>
     }
    </div>
  )

}

export default Chart;