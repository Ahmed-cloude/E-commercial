import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.escuelajs.co/api/v1/products',
    headers: {
        'Content-Type': 'application/json',
    },
})




export default axiosInstance;