import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL;
const API_BASE_URL = (configuredApiUrl || (import.meta.env.DEV ? "http://localhost:5000" : "")).replace(/\/$/, "");
const API_URL = `${API_BASE_URL}/api/auth`;

export const loginAdmin = (username, password) => {
    return axios.post(`${API_URL}/login`, {
        username,
        password
    });
};