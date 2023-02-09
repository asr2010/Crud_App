import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createVitalApi, retrieveVitalApi, updateVitalApi } from "../services/api/VitalsApiService"
import { useAuth } from "./security/AuthContext"

export default function VitalComponent(){

    const {id} = useParams()

    const authContext = useAuth()
    const navigate = useNavigate()
    const username = authContext.username

    const [heartRate, setHeartRate] = useState('')
    const [bloodPressure, setBloodPressure] = useState('')
    const [weight, setWeight] = useState('')
    
    useEffect (
        () => {
            function retrieveVitals(){
                if( id != -1) {
                retrieveVitalApi(username, id)
                .then( response => {
                    setHeartRate(response.data.heartRate)
                    setBloodPressure(response.data.bloodPressure)
                    setWeight(response.data.weight)
                }
                )
                .catch(error =>console.log(error))
                }
        
            }
            retrieveVitals()},
        [username, id])

        function onSubmit(values) {
            const vital = {
                id: id,
                username: username,
                heartRate: values.heartRate,
                bloodPressure: values.bloodPressure,
                weight: values.weight
            }
            console.log(vital)
    
            if (id == -1) {
                createVitalApi(username, vital)
                    .then(response => {
                        navigate('/vitals')
                    })
                    .catch(error => console.log(error))
            } else {
                updateVitalApi(username, id, vital)
                    .then(response => {
                        navigate('/vitals')
                    })
                    .catch(error => console.log(error))
            }
        }
    
        function validate(values) {
            let errors = {}
            if (values.heartRate == null || values.heartRate === '') {
                errors.heartRate = "Plese provide value for Heart Rate"
            }
            if (values.bloodPressure == null || values.bloodPressure === '') {
                errors.heartRate = "Plese provide value for Blood Pressure"
            }
            if (values.weight == null || values.weight === '') {
                errors.heartRate = "Plese provide value for weight"
            }
            
            console.log(values)
            return errors
        }

    
    
    return(
        <div>
            <h1>Vital Details</h1>
            <div style={{ width: '50%', margin: 'auto' }}>
                <Formik
                    initialValues={{ heartRate, bloodPressure, weight }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="heartRate" component="div" className="alert alert-warning" />
                                <ErrorMessage name="bloodPressure" component="div" className="alert alert-warning" />
                                <ErrorMessage name="weight" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Heart Rate</label>
                                    <Field type="text" className="form-control" name="heartRate" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Blood Pressure</label>
                                    <Field type="text" className="form-control" name="bloodPressure" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Weight</label>
                                    <Field type="text" className="form-control" name="weight" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>)
                    }
                </Formik>

            </div>


        </div>
    )
}