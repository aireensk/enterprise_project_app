import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };
    }

    return config;
});

// AUTH
export const login = (username, password) =>
    api.post("/api/auth/token/", { username, password });

export const register = (username, email, password) =>
    api.post("/api/auth/register/", { username, email, password });

// TODOS
export const getTodos = () => api.get("/api/todos/");
export const createTodo = (name) =>
    api.post("/api/todos/", { name });

export const deleteTodo = (id) =>
    api.delete(`/api/todos/${id}/`);

export const toggleTodo = (todo) =>
    api.patch(`/api/todos/${todo.id}/`, {
        completed: !todo.completed,
    });