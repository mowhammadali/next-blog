import axios from "axios";
import { refreshTokensService } from "./authService";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
});

let isRefreshing = false;
let refreshRequest: Promise<any>;

app.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

app.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                refreshRequest = refreshTokensService();

                try {
                    const response = (await refreshRequest).data;
                    if (response) return app(originalRequest);
                } catch (error) {
                    return Promise.reject(error);
                }
            } else {
                await refreshRequest;
                return app(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch,
};

export default http;
