import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://665f00381e9017dc16f261c9.mockapi.io",
    headers:{
        "Content-Type":"application/json",
    }
})

export default AxiosService