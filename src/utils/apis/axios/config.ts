import axios from "axios";
import { BASE_URL } from "../../../constant";

const options = {
    timeout: 5000,
    baseURL: BASE_URL,
    withCredentials: true,
};

const getInstance = axios.create(options)
const postInstance = axios.create(options);
const putInstance = axios.create(options);
const deleteInstance = axios.create(options);
export {
    getInstance,
    postInstance,
    putInstance,
    deleteInstance
};