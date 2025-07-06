"use client";
import React from "react";
import { AuthContext } from "@/context/auth-context";

const useAuth = () => {
    const context = React.useContext(AuthContext);

    if (!context) throw new Error("Context not found");
    return context;
};

export default useAuth;
