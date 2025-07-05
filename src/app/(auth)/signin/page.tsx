"use client";
import React from "react";
import Text from "@/ui/text/text";
import css from "@/app/(auth)/signin/page.module.css";
import RHFTextField from "@/ui/RHFTextField/RHFTextField";
import * as yup from "yup";
import Button from "@/ui/button/button";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinService } from "@/services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormValues = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
});

const SignIn = () => {
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
            await signinService(data);
            toast("با موفقیت وارد شدین", {
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
            <Text as="h1" color="var(--text-base-500)">
                ورود
            </Text>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    type="text"
                    id="signin-email-field"
                    label="ایمیل"
                    name="email"
                    register={register("email")}
                    errors={errors}
                />
                <RHFTextField
                    type="text"
                    id="signin-password-field"
                    label="رمز عبور"
                    name="password"
                    register={register("password")}
                    errors={errors}
                />
                <Button type="submit" height="35px">
                    ورود
                </Button>
                <div className={css["navigate-section"]}>
                    <Text as="p" fontSize="12px">
                        حساب کاربری ندارید؟
                    </Text>
                    <Link href="/signup" style={{ textDecoration: "none" }}>
                        <Text as="p" fontSize="12px" color="var(--sky-600)">
                            ثبت نام
                        </Text>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
