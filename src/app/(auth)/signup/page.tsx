"use client";
import React from "react";
import * as yup from "yup";
import css from "@/app/(auth)/signup/page.module.css";
import RHFTextField from "@/ui/RHFTextField/RHFTextField";
import Button from "@/ui/button/button";
import Text from "@/ui/text/text";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SingupFormValues {
    name: string;
    email: string;
    password: string;
}

const schema = yup.object().shape({
    name: yup
        .string()
        .min(3, "نام باید حداقل 3 کارکتر باشد")
        .max(30, "نام باید حداکثر 30 کارکتر باشد")
        .required("نام الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
        .string()
        .min(8, "رمز عبور باید حداقل شامل 8 کارکتر باشد")
        .required("رمز عبور الزامی است"),
});

const SignUp = () => {
    const { signup } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SingupFormValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data: SingupFormValues) => {
        await signup(data);
    };

    return (
        <div className={css.container}>
            <Text as="h1" color="var(--text-base-500)">
                ثبت نام
            </Text>
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
                <div className={css["navigate-section"]}>
                    <Text as="p" fontSize="12px">
                        حساب کاربری دارید؟
                    </Text>
                    <Link href="/signin" style={{ textDecoration: "none" }}>
                        <Text as="p" fontSize="13px" color="var(--sky-600)">
                            ورود
                        </Text>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
