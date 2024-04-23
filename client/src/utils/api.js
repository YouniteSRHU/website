import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "https://website-theta-eosin-97.vercel.app/api/",
});


export const getEvent = async (id) => {
    try {
        const response = await api.get(`/event/${id}`, {
            timeout: 10 * 1000,
        });

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};
export const getFest = async () => {
    try {
        const response = await api.get(`/youthfest`, {
            timeout: 10 * 1000,
        });

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};
export const getNews = async () => {
    try {
        const response = await api.get(`/news`, {
            timeout: 10 * 1000,
        });

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};
