import React, { useState, useEffect } from "react";
import axios from "axios";

function VitalsListComponent(){


    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:8080/healthvitals");
            setHealthData(result.data);
        };
        fetchData();
    }, []);
    const vitals = [
        {id: 1, heartRate: '120', bloodPressure: '130/80', weight: '180'},
        {id: 2, heartRate: '130', bloodPressure: '120/80', weight: '170'},
        {id: 3, heartRate: '80', bloodPressure: '110/80', weight: '160'},
    ]
    return(
        <div className="container">
            <h1>Your Vitals!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Heart Rate</td>
                            <td>Blood Pressure</td>
                            <td>Weight</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        healthData.map(
                            vital => (
                                <tr key={vital.id}>
                                    <td>{vital.id}</td>
                                    <td>{vital.heartRate}</td>
                                    <td>{vital.bloodPressure}</td>
                                    <td>{vital.weight}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VitalsListComponent