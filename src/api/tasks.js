import axios from "axios";

const URL = import.meta.env.VITE_API || "http://192.168.1.156:8008";
const endpoint = URL + "/api/tasks";

export const fetchTasks = () => axios.get(endpoint);

export const fetchTask = (id) => axios.get(`${endpoint}/${id}`);

export const createTask = (task) => axios.post(endpoint, task);

export const updateTask = (id, task) => axios.put(`${endpoint}/${id}`, task);

export const deleteTask = (id) => axios.delete(`${endpoint}/${id}`);