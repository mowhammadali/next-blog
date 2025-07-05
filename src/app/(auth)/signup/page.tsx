"use client";
import React from "react";
import * as yup from "yup";
import css from "@/app/(auth)/signup/page.module.css";
import RHFTextField from "@/ui/RHFTextField/RHFTextField";
import Button from "@/ui/button/button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupService } from "@/services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormValues = {
    name: string;
    email: string;
    password: string;
};

const schema = yup.object().shape({
    name: yup
        .string()
        .min(5, "نام باید حداقل 5 کارکتر باشد")
        .max(30, "نام باید حداکثر 30 کارکتر باشد")
        .required("نام الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
        .string()
        .min(8, "رمز عبور باید حداقل شامل 8 کارکتر باشد")
        .required("رمز عبور الزامی است"),
});

const SignUp = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data: FormValues) => {
        try {
            await signupService(data);
            toast("ثبت نام با موفقیت انجام شد", {
                type: "success",
                autoClose: 3000,
            });
            reset();
            router.push("/dashboard");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    toast(error.response.data.message, {
                        type: "error",
                        autoClose: 3000,
                    });
                } else {
                    toast(error.message, {
                        type: "error",
                        autoClose: 3000,
                    });
                }
            }
        }
    };

    return (
        <div className={css.container}>
            <h1 className={css.title}>ثبت نام</h1>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    id="signup-name-field"
                    label="نام"
                    type="text"
                    register={register("name")}
                    name="name"
                    errors={errors}
                />
                <RHFTextField
                    id="signup-email-field"
                    label="ایمیل"
                    type="text"
                    register={register("email")}
                    name="email"
                    errors={errors}
                />
                <RHFTextField
                    id="signup-password-field"
                    label="رمز عبور"
                    type="text"
                    register={register("password")}
                    name="password"
                    errors={errors}
                />
                <Button
                    type="submit"
                    className={css["submit-button"]}
                    height="35px"
                >
                    ثبت نام
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
