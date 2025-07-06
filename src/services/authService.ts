import http from "@/services/httpService";
import axios from "axios";

type SignupType = {
    name: string;
    email: string;
    password: string;
};

// post
export const signupService = (data: SignupType) => {
    return http.post("/user/signup", data);
};

export const signinService = (data: Omit<SignupType, "name">) => {
    return http.post("/user/signin", data);
};

// get
export const getUserInfoService = () => {
    return http.get("/user/profile");
};

export const refreshTokensService = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`, {
        withCredentials: true,
    });
};
