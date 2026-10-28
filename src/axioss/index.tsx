import axios from "axios"
import { API_URL } from "config"

// const API_URL = "https://talentscore.pythonanywhere.com/"

// const API_URL = "http://146.190.122.252/"

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

 export const axiosPrivateInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})
export default axiosInstance