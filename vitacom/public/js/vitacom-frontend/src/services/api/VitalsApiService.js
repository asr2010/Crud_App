import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://44.193.214.69:8080'
    }
);


export const retrieveAllVitalsForUsernameApi = (username) => apiClient.get(`/users/${username}/vitals`)

export const deleteVitalApi = (username, id) => apiClient.delete(`/users/${username}/vitals/${id}`)

export const retrieveVitalApi = (username, id) => apiClient.get(`/users/${username}/vitals/${id}`)

export const updateVitalApi = (username, id, vital) => apiClient.put(`/users/${username}/vitals/${id}`, vital)

export const createVitalApi = (username, vital) => apiClient.post(`/users/${username}/vitals`, vital)