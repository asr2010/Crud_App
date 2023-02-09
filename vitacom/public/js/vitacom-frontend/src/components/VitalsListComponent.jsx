import React, { useState, useEffect } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteVitalApi, retrieveAllVitalsForUsernameApi } from "../services/api/VitalsApiService";

function VitalsListComponent(){

    const authContext = useAuth()

    const username = authContext.username

    const [healthData, setHealthData] = useState([]);
    const [message, setMessage] = useState(null)

    useEffect(() => {refreshVitals()}, []);
    const navigate= useNavigate()

    function refreshVitals(){
        retrieveAllVitalsForUsernameApi(username)
        .then(response => {
            setHealthData(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteVital(id) {
        deleteVitalApi(username, id)
        .then(
            () =>{
                setMessage(`Delete of vital with id = ${id} successful`)
                refreshVitals()
            }
        )
        .catch(error => console.log(error))

    }

    function updateVital(id) {
        navigate(`/vital/${id}`)

    }

    function addNewVital() {
        navigate(`/vital/-1`)
    }
    return(
        <div className="container">
            <h1>Your Vitals!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Heart Rate</td>
                            <td>Blood Pressure</td>
                            <td>Weight</td>
                            <td>Delete</td>
                            <td>Update</td>
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
                                    <td><button className="btn btn-warning" onClick={ () => deleteVital(vital.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={ () => updateVital(vital.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewVital}>Add new Vitals</div>
        </div>
    )
}

export default VitalsListComponent