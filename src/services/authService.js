import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE_URL}/api/auth`;

export const loginAdmin = (username, password) => {
    return axios.post(`${API_URL}/login`, {
        username,
        password
    });
};