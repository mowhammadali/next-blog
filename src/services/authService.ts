import http from "@/services/httpService";

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
