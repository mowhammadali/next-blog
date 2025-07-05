import React from 'react'
import css from "@/app/(auth)/layout.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ورود و ثبت نام",
    description: "ورود کاربر"
}

interface PropsType {
    children: React.ReactNode
}

const AuthLayout = ({children}: PropsType) => {
  return (
    <div className={css.container}>
        {children}
    </div>
  )
}

export default AuthLayout