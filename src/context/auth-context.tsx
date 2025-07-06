"use client";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import {
    getUserInfoService,
    signinService,
    signupService,
} from "@/services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SigninFormValues } from "@/app/(auth)/signin/page";
import { SingupFormValues } from "@/app/(auth)/signup/page";

interface User {
    avatar: any;
    avatarUrl: string;
    bookmarkedPosts: any[];
    createdAt: string;
    email: string;
    likedPosts: any[];
    name: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

interface State {
    user: User;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | string;
}

type Action =
    | { type: "LOADING" }
    | {
          type: "SIGNIN";
          payload: User;
      }
    | { type: "SIGNUP"; payload: User }
    | { type: "GET_USER_DATA"; payload: any }
    | { type: "REJECTED"; payload: string };

type AuthContextType = {
    state: State;
    signin: (data: SigninFormValues) => Promise<void>;
    signup: (data: SingupFormValues) => Promise<void>;
};

interface PropsType {
    children: React.ReactNode;
}

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const authReducer = (state: State, action: Action) => {
    const type = action.type;

    switch (type) {
        case "LOADING":
            return { ...state, isLoading: true };
        case "SIGNIN":
            return {
                isLoading: false,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case "SIGNUP":
            return {
                isLoading: false,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case "GET_USER_DATA":
            return {
                isLoading: false,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case "REJECTED":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }: PropsType) => {
    const router = useRouter();
    const [state, dispatch] = useReducer(authReducer, initialState);

    const signin = async (data: SigninFormValues) => {
        dispatch({ type: "LOADING" });

        try {
            const response = await signinService(data);
            toast("با موفقیت وارد شدین", {
                type: "success",
                autoClose: 3000,
            });

            dispatch({ type: "SIGNIN", payload: response.data.data.user });
            router.push("/profile");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const message = error.response.data.message;

                    dispatch({ type: "REJECTED", payload: message });
                    toast(message, {
                        type: "error",
                        autoClose: 3000,
                    });
                } else {
                    dispatch({ type: "REJECTED", payload: error.message });
                    toast(error.message, {
                        type: "error",
                        autoClose: 3000,
                    });
                }
            }
        }
    };

    const signup = async (data: SingupFormValues) => {
        dispatch({ type: "LOADING" });

        try {
            const response = await signupService(data);
            toast("ثبت نام با موفقیت انجام شد", {
                type: "success",
                autoClose: 3000,
            });

            dispatch({ type: "SIGNUP", payload: response.data.data.user });
            router.push("/profile");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const message = error.response.data.message;

                    dispatch({ type: "REJECTED", payload: message });
                    toast(error.response.data.message, {
                        type: "error",
                        autoClose: 3000,
                    });
                } else {
                    dispatch({ type: "REJECTED", payload: error.message });
                    toast(error.message, {
                        type: "error",
                        autoClose: 3000,
                    });
                }
            }
        }
    };

    const getUserInfo = async () => {
        dispatch({ type: "LOADING" });

        try {
            await new Promise((res) => {
                setTimeout(() => {
                    res("");
                }, 2000);
            });

            const response = await getUserInfoService();
            dispatch({
                type: "GET_USER_DATA",
                payload: response.data.data.user,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const message = error.response.data.message;

                    dispatch({ type: "REJECTED", payload: message });
                } else {
                    dispatch({ type: "REJECTED", payload: error.message });
                }
            }
        }
    };

    useEffect(() => {
        const getUserData = async () => {
            await getUserInfo();
        };

        getUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ state, signin, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
