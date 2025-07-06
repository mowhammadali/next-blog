import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/local-font";
import Header from "@/components/shared/header/header";
import AuthContextProvider from "@/context/auth-context";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
    title: {
        template: "%s | اپلیکیشن بلاگ ها",
        default: "اپلیکیشن بلاگ ها",
    },
    description: "اپلیکیشن جامع بلاگ ها",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={vazirFont.variable}>
            <body className={vazirFont.variable}>
                <AuthContextProvider>
                    <Header />
                    <ToastContainer />
                    {children}
                </AuthContextProvider>
            </body>
        </html>
    );
}
