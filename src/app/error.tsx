"use client"
import React from "react";

const Error = ({
    error,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return <div>{error.message}</div>;
};

export default Error;
