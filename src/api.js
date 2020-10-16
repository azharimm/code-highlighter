import axios from "axios";

const api = axios.create({
	baseURL: "https://highlight-code-api.vercel.app",
});

export default api;
