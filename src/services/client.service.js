import axios from "axios";

export const clientService = axios.create({
    // baseURL: "https://staging-api-mabar.bism.app/api/v1",
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
});