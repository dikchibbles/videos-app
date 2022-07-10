import axios from "axios";

const API_KEY = 'AIzaSyAzU-Bib2HrSN4C_hS4WhBR4i-NsiyXmVM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: API_KEY,
    }
})