import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveAllVitalsForUsernameApi } from "../services/api/VitalsApiService";
import { useAuth } from "./security/AuthContext"

import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'




export default function AnalyzeComponent() {

    const authContext = useAuth()
    const username = authContext.username
    const [healthData, setHealthData] = useState([]);

    useEffect(() => { refreshVitals() }, []);
    const navigate = useNavigate()

    function refreshVitals(){
        retrieveAllVitalsForUsernameApi(username)
        .then(response => {
            setHealthData(sort_data(response.data))
        })
        .catch(error => console.log(error))
    }

    function sort_data(response){
        var data = response.sort((a, b) => {
            if (a.entryDate < b.entryDate) {
              return -1;
            }
          });
        return data
    }

    const bloodPressure = healthData.map(function(item) {
        return item.bloodPressure;
    });

    const heartRate = healthData.map(function(item) {
        return item.heartRate;
    });

    const bloodGlucose = healthData.map(function(item) {
        return item.bloodGlucose;
    });

    const temperature = healthData.map(function(item) {
        return item.temperature;
    });

    const weight = healthData.map(function(item) {
        return item.weight;
    });

    const entryDate = healthData.map(function(item) {
        return item.entryDate;
    })
    console.log(bloodPressure)
    console.log(heartRate)

    const data = {
        labels: entryDate,
        datasets: [
          {
            label: "Blood Pressure",
            data: bloodPressure,
            fill: false,
            borderColor: "#7D3C98"
          },
          {
            label: "Blood Glucose",
            data: bloodGlucose,
            fill: false,
            borderColor: "#27AE60"
          },
          {
            label: "Heart Rate",
            data: heartRate,
            fill: false,
            borderColor: "#FF5733"
          },
          {
            label: "Weight",
            data: weight,
            fill: false,
            borderColor: "#14BBBB"
          },
          {
            label: "Temperature",
            data: temperature,
            fill: false,
            borderColor: "#FFF615"
          }
          
        ]
      }
    console.log(data)
    return (
        <div>
            <div style={{ width: '50%', margin: 'auto' }}>
                <Line data={data} />
            </div>
            
        </div>
        

    )
}