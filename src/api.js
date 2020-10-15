import axios from "axios";

const api = axios.create({
	baseURL: "https://highlight-code-api.vercel.app/api",
});

export default api;
