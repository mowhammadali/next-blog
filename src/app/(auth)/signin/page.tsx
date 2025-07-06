"use client";
import React from "react";
import Text from "@/ui/text/text";
import css from "@/app/(auth)/signin/page.module.css";
import RHFTextField from "@/ui/RHFTextField/RHFTextField";
import * as yup from "yup";
import Button from "@/ui/button/button";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SigninFormValues {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
});

const SignIn = () => {
    const { signin } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninFormValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data: SigninFormValues) => {
        await signin(data);
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
