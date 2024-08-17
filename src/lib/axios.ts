import Axios from "axios";
import {API_URL} from "@/config";
import {toast} from "sonner";

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    () => {
        toast.error('خطایی رخ داد')
        // return Promise.reject(error);
    },
);
