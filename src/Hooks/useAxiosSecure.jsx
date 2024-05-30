import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;