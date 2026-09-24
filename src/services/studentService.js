import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL;
const API_BASE_URL = (configuredApiUrl || (import.meta.env.DEV ? "http://localhost:5000" : "")).replace(/\/$/, "");
const API_URL = `${API_BASE_URL}/api/students`;

export const getStudents = () => {
    return axios.get(API_URL);
};

export const addStudent = (student) => {
    return axios.post(API_URL, student);
};

export const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

export const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const getStudent = (id) => {
    return axios.get(`${API_URL}/${id}`);
};